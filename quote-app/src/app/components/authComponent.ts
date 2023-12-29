import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import firebase from '../../config/firebaseConfig'
import { SerializableUser, setUser } from '../lib/authSlice'
// Login
export const handleLogin = async (
  email: string,
  password: string,
  dispatch: Function,
): Promise<boolean> => {
  try {
    const auth = getAuth(firebase)
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    if (userCredential.user) {
      const user = userCredential.user
      const userData: SerializableUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }
      dispatch(setUser(userData))
      return true
    }
    return false
  } catch (error) {
    console.error('Login failed:', error)
    return false
  }
}
