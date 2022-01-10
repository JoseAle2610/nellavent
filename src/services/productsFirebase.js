import {bd} from 'services/firebase'
import {collection, addDoc, getDocs} from 'firebase/firestore'

export const addProduct = async (data) => {
  try {
    return await addDoc(collection(bd, 'products'), data)
  } catch (e) {
    console.log(e)
  }
}

export const fetchProducts = async () => {
  try {
    const docs = getDocs(collection(bd, 'products'))
    return docs
  } catch (e) {
    console.log(e)
  }
}
