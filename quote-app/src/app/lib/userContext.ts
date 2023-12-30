import { useState, useEffect, createContext, useContext } from 'react'
import firebase from '../../config/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Define a type for your user state
type UserType = {
  uid: string
  email: string | null
} | null

export const UserContext = createContext<{
  user: UserType
  loadingUser: boolean
}>({
  user: null,
  loadingUser: true,
})

export default function UserContextComp() {
  const [user, setUser] = useState<UserType>(null)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    const auth = getAuth(firebase)
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const { uid, email } = user
          setUser({ uid, email })
        } else {
          setUser(null)
        }
      } catch (error) {
        throw error
      } finally {
        setLoadingUser(false)
      }
    })

    return () => unsubscriber()
  }, [])
  return user
}

export const useUser = () => useContext(UserContext)
