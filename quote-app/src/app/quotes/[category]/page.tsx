'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DocumentData } from 'firebase/firestore'
import { fetchQuotesFromCollection } from '../../components/fetchCategoryQuote'
import styles from '@/app/styles/categoryStyles'

const CategoryComponent = () => {
  const [quotes, setQuotes] = useState<DocumentData[]>([])
  const [filteredQuotes, setFilteredQuotes] = useState<DocumentData[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showScrollButton, setShowScrollButton] = useState(false)
  const router = useRouter()
  const category = usePathname().split('/')
  const categoryName = category[2]

  useEffect(() => {
    const fetchQuotes = async () => {
      if (categoryName) {
        try {
          const data = await fetchQuotesFromCollection(categoryName)
          setQuotes(data)
          setFilteredQuotes(data) // Initialize with all data
        } catch (error) {
          console.error('Error fetching quotes: ', error)
        }
      }
    }

    fetchQuotes()
  }, [categoryName])

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

  const handleDeleteClick = (quoteId: any) => {
    console.log(`Delete quote with id: ${quoteId}`)
    // Implement delete logic here
  }

  const handleEditClick = (quoteId: any) => {
    console.log(`Edit quote with id: ${quoteId}`)
    // Implement edit logic here
  }

  const handleAddClick = () => {
    console.log('Add a new quote')
    // Implement add logic here
  }

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Emotional Quotes</h1>
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
    </div>
  )
}

export default CategoryComponent
