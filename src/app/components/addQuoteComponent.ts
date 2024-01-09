import { db } from '@/config/firebaseConfig'
import { collection, doc, setDoc } from 'firebase/firestore'

export const addQuoteToCollection = async (
  categoryName: string,
  english: string,
  spanish: string,
  highestId: number,
): Promise<boolean> => {
  try {
    const quotesCollectionRef = collection(db, categoryName)
    const quoteDocRef = doc(quotesCollectionRef, (highestId + 1).toString())

    await setDoc(quoteDocRef, {
      id: highestId + 1,
      english: english,
      spanish: spanish,
    })

    return true
  } catch (error) {
    console.error('Error adding document: ', error)
    return false
  }
}
