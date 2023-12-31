import { db } from '../../config/firebaseConfig'
import { collection, query, getDocs, DocumentData } from 'firebase/firestore'

export const fetchQuotesFromCollection = async (
  collectionName: string,
): Promise<DocumentData[]> => {
  try {
    const lowerCaseCollectionName = collectionName.toLowerCase()

    const collectionRef = collection(db, lowerCaseCollectionName)
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
