'use client'
import React, { useState, useEffect } from 'react'
import { fetchRandomLoveQuote } from '../components/fetchAllQuotes'
import styles from '../styles/quotesPageStyles'
export default function Quotes() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const getQuote = async () => {
      const fetchedQuote = await fetchRandomLoveQuote()
      setQuote(fetchedQuote)
    }

    getQuote()
  }, [])
  const categories = [
    'LOVE',
    'INSPIRATIONAL',
    'PHILOSOPHICAL',
    'EMOTIONAL',
    'RANDOM',
  ]

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {categories.map((category) => (
          <button key={category} className={styles.navItem}>
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
