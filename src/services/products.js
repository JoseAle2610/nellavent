const products = [
  {
    name: "Pepitas",
    price: 1,
    marca: "Danibi",
    id : 1
  },
  {
    name: "Toston",
    price: 2,
    marca: "Artesanal",
    id : 2
  },
  {
    name: "Ostis",
    price: 3.5,
    marca: "marca",
    id : 3
  },
  {
    name: "Ositos",
    price: 2,
    marca: "Azul",
    id : 4
  }
]

export const fetchProducts = () => Promise.resolve(products)

export const addProduct = (newProduct) => {
  newProduct.id = Math.max.apply(null, products.map(e => e.id)) + 1
  products.push(newProduct)
  return Promise.resolve(products)
}

export const editProduct = (id, data) => {
  let productIndex = products.findIndex(e => e.id === id)
  products[productIndex] = data
  return Promise.resolve(products)
}
