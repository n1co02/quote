import { db } from '../../config/firebaseConfig'
import { collection, query, getDocs, DocumentData } from 'firebase/firestore'
/**
 * Fetches data from a specific Firestore collection based on the provided string.
 * @param {string} collectionName - The name of the collection to fetch data from.
 * @returns {Promise<DocumentData[]>} A promise that resolves to an array of document data.
 */
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
