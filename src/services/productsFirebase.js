import {bd} from 'services/firebase'
import {collection, addDoc, getDocs, doc, setDoc} from 'firebase/firestore'

export const fetchProducts = async () => {
  try {
    const {docs} = await getDocs(collection(bd, 'products'))
    return docs.map(e => ({
      ...e.data(),
      id: e.id,
    }))
  } catch (e) {
    console.log(e)
  }
}

export const addProduct = async (data) => {
  try {
    await addDoc(collection(bd, 'products'), data)
    return await fetchProducts()
  } catch (e) {
    console.error('error add product', e)
  }
}

export const editProduct = async (id, data) => {
  try {
    const dooRef = doc(bd, 'products', id)
    await setDoc(dooRef, data)
    return await fetchProducts()
  } catch (e) {
    console.error(e)
  }
}
