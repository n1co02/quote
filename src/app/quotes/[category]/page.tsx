'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { DocumentData } from 'firebase/firestore'
import { fetchQuotesFromCollection } from '../../components/fetchCategoryQuote'
import { QuotePopUp } from './popUps/quotePopUp'
import lightStyles from '@/app/styles/categoryStyles/categoryStyles'
import darkStyles from '@/app/styles/categoryStyles/categoryDarkStyles'
import ConfirmPopUp from './popUps/confirmPopUp'
import SwitchModeButton, {
  useDarkMode,
} from '../switchModeButton/SwitchModeButton'

const CategoryComponent = () => {
  const [quotes, setQuotes] = useState<DocumentData[]>([])
  const [filteredQuotes, setFilteredQuotes] = useState<DocumentData[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)
  const [confirmDeletePopUp, setConfirmDeletePopUp] = useState(false)
  const [quoteIdToDelete, setQuoteIdToDelete] = useState('')
  const [currentQuote, setCurrentQuote] = useState({
    id: '',
    english: '',
    spanish: '',
    add: true,
  })
  const category = usePathname().split('/')
  const categoryName = category[2]

  const [highestId, setHighestId] = useState(0)

  useEffect(() => {
    if (!isPopUpVisible) {
      const fetchQuotes = async () => {
        try {
          const data = await fetchQuotesFromCollection(categoryName)
          setQuotes(data)
          setFilteredQuotes(data)

          const newHighestId = data.reduce((maxId, quote) => {
            const quoteId = parseInt(quote.id, 10)
            return quoteId > maxId ? quoteId : maxId
          }, 0)

          setHighestId(newHighestId)
        } catch (error) {
          console.error('Error fetching quotes: ', error)
        }
      }

      fetchQuotes()
    }
  }, [isPopUpVisible, categoryName, confirmDeletePopUp])

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true)
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScrollButton])

  useEffect(() => {
    const results = quotes.filter(
      (quote) =>
        quote.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.spanish.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredQuotes(results)
  }, [searchQuery, quotes])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleDeleteClick = async (quoteId: React.SetStateAction<string>) => {
    setQuoteIdToDelete(quoteId)
    setConfirmDeletePopUp(true)
  }

  const handleEditClick = (quoteId: any) => {
    const quoteToEdit = quotes.find((quote) => quote.id === quoteId)
    if (quoteToEdit) {
      setCurrentQuote({
        id: quoteToEdit.id,
        english: quoteToEdit.english,
        spanish: quoteToEdit.spanish,
        add: false,
      })
      setIsPopUpVisible(true)
    } else {
      console.error('Quote not found for editing')
    }
  }

  const handleAddClick = () => {
    setCurrentQuote({
      id: '',
      english: '',
      spanish: '',
      add: true,
    })
    setIsPopUpVisible(true)
  }
  const handleClosePopUp = () => {
    setIsPopUpVisible(false)
  }
  const handleCloseConfirmPopUp = () => {
    setConfirmDeletePopUp(false)
    setQuoteIdToDelete('')
  }
  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchQuery(event.target.value)
  }
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  const darkMode = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        {capitalizeFirstLetter(categoryName)} Quotes
      </h1>
      <div>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search for quotes"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <button
        className={`${styles.button} ${styles.addButton}`}
        onClick={handleAddClick}
      >
        Add Quote
      </button>
      {filteredQuotes.map((quote, index) => (
        <div key={index} className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <span className={styles.languageLabel}>English:</span>
            {quote.english}
          </p>
          <p className={styles.quoteText}>
            <span className={styles.languageLabel}>Spanish:</span>
            {quote.spanish}
          </p>
          <div className={styles.buttonsContainer}>
            <button
              className={`${styles.button} ${styles.editButton}`}
              onClick={() => handleEditClick(quote.id)}
            >
              Edit
            </button>
            <button
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={() => handleDeleteClick(quote.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {showScrollButton && (
        <button
          className={`${styles.button} fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 z-10`}
          onClick={scrollToTop}
        >
          ↑ Top
        </button>
      )}
      {isPopUpVisible && (
        <QuotePopUp
          onClose={handleClosePopUp}
          categoryName={categoryName}
          english={currentQuote.english}
          spanish={currentQuote.spanish}
          add={currentQuote.add}
          highestId={highestId}
          quoteId={currentQuote.id}
        />
      )}
      {confirmDeletePopUp && (
        <ConfirmPopUp
          onClose={handleCloseConfirmPopUp}
          categoryName={categoryName}
          quoteId={quoteIdToDelete}
        />
      )}
    </div>
  )
}

export default CategoryComponent
