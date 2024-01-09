import { db } from '@/config/firebaseConfig'
import { collection, doc, getDocs, query, updateDoc } from 'firebase/firestore'
import { addQuoteToCollection } from './addQuoteComponent'
import { deleteQuoteOfCollection } from './deleteQuoteComponent'

export const editQuoteOfCollection = async (
  categoryName: string,
  english: string,
  spanish: string,
  quoteId: string,
  previousCategoryName: string,
): Promise<boolean> => {
  try {
    if (categoryName !== previousCategoryName) {
      const lowerCaseCollectionName = categoryName.toLowerCase()
      let newHighestId = 0
      const collectionRef = collection(db, lowerCaseCollectionName)
      const q = query(collectionRef)
      const querySnapshot = await getDocs(q)
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        const docId = parseInt(doc.id, 10)
        newHighestId = docId > newHighestId ? docId : newHighestId
      })
      await deleteQuoteOfCollection(previousCategoryName, quoteId.toString())

      await addQuoteToCollection(
        lowerCaseCollectionName,
        english,
        spanish,
        newHighestId,
      )
    }
    if (categoryName === previousCategoryName) {
      const quoteDocRef = doc(db, previousCategoryName, quoteId.toString())
      await updateDoc(quoteDocRef, {
        english: english,
        spanish: spanish,
      })
    }

    return true
  } catch (error) {
    console.error('Error adding document: ', error)
    return false
  }
}
