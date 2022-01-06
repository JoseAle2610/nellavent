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
  products.push(newProduct)
  return Promise.resolve(products)
}
