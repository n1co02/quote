'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetchRandomLoveQuote } from '../components/fetchAllQuotes'
import lightStyles from '../styles/quotesPagesStyles/quotesPageStyles'
import darkStyles from '../styles/quotesPagesStyles/quotesPagesDarkStyles'
import { categories } from './categoriesType'
import SwitchModeButton, {
  useDarkMode,
} from './switchModeButton/SwitchModeButton'

export default function Quotes() {
  const [quote, setQuote] = useState('')
  const router = useRouter()
  useEffect(() => {
    const getQuote = async () => {
      const fetchedQuote = await fetchRandomLoveQuote()
      setQuote(fetchedQuote)
    }

    getQuote()
  }, [])

  const handleCategoryClick = (category: string) => {
    router.push(`/quotes/${category.toLowerCase()}`)
  }
  const darkMode = useDarkMode()
  const styles = darkMode ? darkStyles : lightStyles
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {categories.map((category) => (
          <button
            key={category}
            className={styles.navItem}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quote}</p>
      </div>
    </div>
  )
}
