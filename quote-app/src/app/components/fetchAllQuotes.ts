import { db } from '../../config/firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore'

export const fetchRandomLoveQuote = async () => {
  const collectionRef = collection(db, 'inspirational')
  const querySnapshot = await getDocs(query(collectionRef))
  const documentIds = querySnapshot.docs.map((doc) => doc.id)

  const randomIndex = Math.floor(Math.random() * documentIds.length)
  const randomDocId = documentIds[randomIndex]

  const randomDoc = querySnapshot.docs.find((doc) => doc.id === randomDocId)
  console.log(randomDoc?.data())
  return randomDoc?.data().english
}
