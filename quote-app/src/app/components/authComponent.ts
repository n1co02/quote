import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import firebase from '../../config/firebaseConfig'
import { redirect } from 'next/dist/server/api-utils'

// Login
export const handleLogin = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const auth = getAuth(firebase)

    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    if (userCredential.user) {
      console.log('Login succeeded:', userCredential.user.email)
      return true
    }
    return true
  } catch (error) {
    console.error('Login failed:', error)
    return false
  }
}
