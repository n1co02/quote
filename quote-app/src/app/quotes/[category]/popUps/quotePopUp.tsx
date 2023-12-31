import React, { useState } from 'react'
import popupStyles from '@/app/styles/quotePopUpStyles'
import ErrorPopUp from './errorPopUp'
import { addQuoteToCollection } from '@/app/components/addQuoteComponent'
import { editQuoteOfCollection } from '@/app/components/editQuoteComponent'
import { categories } from '../../page'
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
  return (
    <>
      {errorPopUp && <ErrorPopUp onClose={handleClosePopUp} />}
      {!errorPopUp && (
        <div className={popupStyles.popupContainer}>
          <div className={popupStyles.popup}>
            <h2>
              {add ? 'Add New Quote' : 'Edit Quote'} to "{categoryName}"
            </h2>
            <input
              type="text"
              className={popupStyles.inputField}
              placeholder="English"
              value={englishText}
              onChange={handleEnglishChange}
            />
            <input
              type="text"
              className={popupStyles.inputField}
              placeholder="Spanish"
              value={spanishText}
              onChange={handleSpanishChange}
            />

            {!add && (
              <select
                className={popupStyles.dropdown}
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

            <div className={popupStyles.buttonContainer}>
              <button
                className={`${popupStyles.button} ${popupStyles.closeButton}`}
                onClick={onClose}
              >
                Close
              </button>
              {add ? (
                <button
                  className={`${popupStyles.button} ${popupStyles.addButton}`}
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
                  className={`${popupStyles.button} ${popupStyles.editButton}`}
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
