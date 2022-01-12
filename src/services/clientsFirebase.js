import {bd} from 'services/firebase'
import {collection, addDoc, getDocs, doc, serverTimestamp} from 'firebase/firestore'

export const fetchClients = async () => {
  try {
    const {docs} = await getDocs(collection(bd, 'clients'))
    return docs.map(e => ({
      ...e.data(),
      id: e.id,
    }))
  } catch (e) {
    console.log(e)
  }
}

export const addShopping = async (id, data) => {
  try {
    const docRef = doc(bd, 'clients', id)
    const collectionRef = collection(docRef, 'purchases')
    await addDoc(collectionRef, {
      ...data,
      created: serverTimestamp()
    })
    console.log('adding data')
    return await fetchClients()
  } catch (e) {
    console.log(e)
  }
}

export const getPurchases = async (id) => {
  try {
    const {docs} = await getDocs(collection(bd, `clients/${id}/purchases`))
    return docs.map(e => ({
      ...e.data(),
      id: e.id
    }))
  } catch (e) {
    console.log(e)
  }
}
