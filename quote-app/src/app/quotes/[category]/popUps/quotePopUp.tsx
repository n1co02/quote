import React, { useState } from 'react'
import lightStyles from '@/app/styles/quotePopUpStyles/quotePopUpStyles'
import darkStyles from '@/app/styles/quotePopUpStyles/quotePopUpDarkStyles'
import ErrorPopUp from './errorPopUp'
import { addQuoteToCollection } from '@/app/components/addQuoteComponent'
import { editQuoteOfCollection } from '@/app/components/editQuoteComponent'
import { categories } from '../../page'
import { useDarkMode } from '../../switchModeButton/SwitchModeButton'
type QuotePopUpProps = {
  onClose: () => void
  categoryName: string
  english: string
  spanish: string
  add: boolean
  highestId: number
  quoteId: string
}

export const QuotePopUp = ({
  onClose,
  categoryName,
  english,
  spanish,
  add,
  highestId,
  quoteId,
}: QuotePopUpProps) => {
  const [errorPopUp, setErrorPopUp] = useState(false)
  const [englishText, setEnglishText] = useState(english)
  const [spanishText, setSpanishText] = useState(spanish)
  const sortedCategories = [categoryName].concat(
    categories.filter((category) => category !== categoryName.toUpperCase()),
  )
  const [selectedOption, setSelectedOption] = useState(categoryName)

  const handleAddClick = async (
    categoryName: string,
    english: string,
    spanish: string,
    onClose: () => void,
    highestId: number,
  ) => {
    if (spanish === '' || english === '') {
      setErrorPopUp(true)
      return
    }

    const result = await addQuoteToCollection(
      categoryName,
      english,
      spanish,
      highestId,
    )
    if (result) onClose()
  }

  const handleEditClick = async (
    onClose: () => void,
    categoryName: string,
    english: string,
    spanish: string,
    quoteId: string,
    previousCategoryName: string,
  ) => {
    if (spanish === '' || english === '') {
      setErrorPopUp(true)
      return
    }

    const result = await editQuoteOfCollection(
      categoryName,
      english,
      spanish,
      quoteId,
      previousCategoryName,
    )
    if (result) onClose()
  }

  const handleEnglishChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setEnglishText(event.target.value)
  }

  const handleSpanishChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSpanishText(event.target.value)
  }
  const handleClosePopUp = () => {
    setErrorPopUp(false)
  }
  const darkMode = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles
  return (
    <>
      {errorPopUp && <ErrorPopUp onClose={handleClosePopUp} />}
      {!errorPopUp && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <h2>
              {add ? 'Add New Quote' : 'Edit Quote'} to "{categoryName}"
            </h2>
            <input
              type="text"
              className={styles.inputField}
              placeholder="English"
              value={englishText}
              onChange={handleEnglishChange}
            />
            <input
              type="text"
              className={styles.inputField}
              placeholder="Spanish"
              value={spanishText}
              onChange={handleSpanishChange}
            />

            {!add && (
              <select
                className={styles.dropdown}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {sortedCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}

            <div className={styles.buttonContainer}>
              <button
                className={`${styles.button} ${styles.closeButton}`}
                onClick={onClose}
              >
                Close
              </button>
              {add ? (
                <button
                  className={`${styles.button} ${styles.addButton}`}
                  onClick={() =>
                    handleAddClick(
                      categoryName,
                      englishText,
                      spanishText,
                      onClose,
                      highestId,
                    )
                  }
                >
                  Add
                </button>
              ) : (
                <button
                  className={`${styles.button} ${styles.editButton}`}
                  onClick={() =>
                    handleEditClick(
                      onClose,
                      selectedOption,
                      englishText,
                      spanishText,
                      quoteId,
                      categoryName,
                    )
                  }
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
