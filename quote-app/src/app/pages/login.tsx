// LoginPage.js
'use client'
import React, { useState } from 'react'
import styles from '../styles/loginPageStyles' // Adjust the path as needed

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Handle login logic here
    console.log('Logging in with:', email, password)
    // You would typically send a request to your server or authentication service here
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="mb-4">
            <input
              className={styles.input}
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              className={styles.input}
              placeholder="Password"
              type="password" // This ensures the input is treated as a password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
