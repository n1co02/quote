'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import styles from './styles/loginPageStyles'
import { handleLogin } from './components/authComponent'
import UserContextComp, { useUser } from './lib/userContext'
export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const loginResponse: boolean = await handleLogin(email, password, dispatch)
    if (loginResponse) router.push('/quotes')
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
              type="string"
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
              type="password"
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
