import React, { useState } from 'react'
import popupStyles from '@/app/styles/confirmPopUpStyles'
import { deleteQuoteOfCollection } from '@/app/components/deleteQuoteComponent'

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

  return (
    <div className={popupStyles.popupContainer}>
      <div className={popupStyles.popup}>
        <h2 className="text-lg font-bold mb-4">Confirm to delete the quote</h2>
        <div className={popupStyles.buttonContainer}>
          <button
            className={`${popupStyles.button} ${popupStyles.noButton}`}
            onClick={handleClose}
          >
            NO
          </button>
          <button
            className={`${popupStyles.button} ${popupStyles.confirmButton}`}
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
