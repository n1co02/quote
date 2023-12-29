'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { fetchRandomLoveQuote } from '../components/fetchAllQuotes'
import styles from '../styles/quotesPageStyles'
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
  const categories = [
    'LOVE',
    'INSPIRATIONAL',
    'PHILOSOPHICAL',
    'EMOTIONAL',
    'RANDOM',
  ]
  const handleCategoryClick = (category: string) => {
    // Navigate to the category page
    router.push(`/quotes/${category.toLowerCase()}`)
  }
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
