import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import firebase from '../../config/firebaseConfig'
import { setUser } from '../lib/authSlice'
// Login
export const handleLogin = async (
  email: string,
  password: string,
  dispatch: Function, // Add dispatch as a parameter
): Promise<boolean> => {
  try {
    const auth = getAuth(firebase)
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    if (userCredential.user) {
      dispatch(setUser(userCredential.user)) // Dispatch the user data
      return true
    }
    return false
  } catch (error) {
    console.error('Login failed:', error)
    return false
  }
}
