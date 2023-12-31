import React, { useState } from 'react'
import popupStyles from '@/app/styles/ErrorPopUpStyles'
type ErrorPopUpProps = {
  onClose: () => void
}
const ErrorPopUp = ({ onClose }: ErrorPopUpProps) => {
  const [showPopup, setShowPopup] = useState(true)

  const handleClose = () => {
    setShowPopup(false)
    onClose()
  }

  if (!showPopup) return null

  return (
    <div className={popupStyles.popupContainer}>
      <div className={popupStyles.popup}>
        <h2 className="text-lg font-bold mb-4">Error</h2>
        <p className="mb-4">You have to fill out all the text fields.</p>
        <div className={popupStyles.buttonContainer}>
          <button
            className={`${popupStyles.button} ${popupStyles.closeButton}`}
            onClick={handleClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPopUp
