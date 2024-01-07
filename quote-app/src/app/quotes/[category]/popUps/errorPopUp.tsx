import React, { useState } from 'react'
import lightStyles from '@/app/styles/errorPopUpStyles/errorPopUpStyles'
import darkStyles from '@/app/styles/errorPopUpStyles/errorPopUpDarkStyles'
import { useDarkMode } from '../../switchModeButton/SwitchModeButton'
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

  const darkMode = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2 className="text-lg font-bold mb-4">Error</h2>
        <p className="mb-4">You have to fill out all the text fields.</p>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.closeButton}`}
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
