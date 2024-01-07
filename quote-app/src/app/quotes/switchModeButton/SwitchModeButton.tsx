import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../../lib/darkModeSlice'
import darkStyles from './toggleButtonstyles/toggleButtonDarkStyles'
import lightStyles from './toggleButtonstyles/toggleButtonStyles'

export const useDarkMode = () => {
  const darkMode = useSelector((state) => state.auth.darkMode.darkMode)
  return darkMode
}

export default function SwitchModeButton() {
  const dispatch = useDispatch()
  const darkMode: boolean = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <button onClick={handleToggleDarkMode} className={styles.toggleButton}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}
