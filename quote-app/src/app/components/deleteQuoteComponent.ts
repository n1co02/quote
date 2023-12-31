import { db } from '@/config/firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore'

export const deleteQuoteOfCollection = async (
  collectionName: string,
  quoteId: string,
): Promise<boolean> => {
  console.log(typeof collectionName, typeof quoteId)
  console.log(collectionName, quoteId)
  try {
    if (typeof collectionName !== 'string' || typeof quoteId !== 'string') {
      return false
    }
    const quoteDocRef = doc(db, collectionName, quoteId)

    await deleteDoc(quoteDocRef)
    return true
  } catch (error) {
    console.error('Error deleting document: ', error)
    return false
  }
}
