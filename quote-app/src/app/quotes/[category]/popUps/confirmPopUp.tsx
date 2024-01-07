import React, { useState } from 'react'
import lightStyles from '@/app/styles/confirmPopUpStyles/confirmPopUpStyles'
import darkStyles from '@/app/styles/confirmPopUpStyles/confirmPopUpDarkStyles'
import { deleteQuoteOfCollection } from '@/app/components/deleteQuoteComponent'
import { useDarkMode } from '../../switchModeButton/SwitchModeButton'

type ConfirmPopUpProps = {
  onClose: () => void
  categoryName: string
  quoteId: string
}
const ConfirmPopUp = ({
  onClose,
  categoryName,
  quoteId,
}: ConfirmPopUpProps) => {
  const [showPopup, setShowPopup] = useState(true)

  const handleClose = () => {
    setShowPopup(false)
    onClose()
  }
  const handleDeletePopUp = async () => {
    const result = deleteQuoteOfCollection(categoryName, quoteId.toString())
    if (await result) handleClose()
  }
  if (!showPopup) return null
  const darkMode = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2 className="text-lg font-bold mb-4">Confirm to delete the quote</h2>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.noButton}`}
            onClick={handleClose}
          >
            NO
          </button>
          <button
            className={`${styles.button} ${styles.confirmButton}`}
            onClick={handleDeletePopUp}
          >
            YES
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPopUp
