'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import { fetchQuotesFromCollection } from '../../components/fetchCategoryQuote'
import styles from '@/app/styles/categoryStyles'

const CategoryComponent = () => {
  const [quotes, setQuotes] = useState<DocumentData[]>([])
  const router = useRouter()

  const category = usePathname().split('/')
  const categoryName = category[2]

  useEffect(() => {
    const fetchQuotes = async () => {
      if (categoryName) {
        try {
          const data = await fetchQuotesFromCollection(categoryName)
          setQuotes(data)
        } catch (error) {
          console.error('Error fetching quotes: ', error)
        }
      }
    }

    fetchQuotes()
  }, [categoryName])
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Emotional Quotes</h1>
      {quotes.map((quote, index) => (
        <div key={index} className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <span className={styles.languageLabel}>English:</span>{' '}
            {quote.english}
          </p>
          <p className={styles.quoteText}>
            <span className={styles.languageLabel}>Spanish:</span>{' '}
            {quote.spanish}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CategoryComponent
