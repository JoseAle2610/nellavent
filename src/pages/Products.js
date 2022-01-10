import {useState, useEffect, useRef} from 'react'
//import {fetchProducts, addProduct, editProduct} from 'services/products'
import {fetchProducts, addProduct} from 'services/productsFirebase'
import {Container} from 'components/Container'
import {Card} from 'components/Card'
import {Form} from 'components/Form'
import {Input} from 'components/Input'
import {Button} from 'components/Button'
import {Flex, FlexItem} from 'components/Flex'
import {Table} from 'components/Table'

export const Products = () => {
  const productInitialState = {
    name: '',
    marca: '',
    price: 0,
    id: ''
  }
  const [products, setProducts] = useState([])
  const [product, setProduct]   = useState(productInitialState)
  const [editMode, setEditMode] = useState(false)
  const inputProductName = useRef()

  const headers = [
    {header: 'Nombre', reference: 'name'},
    {header: 'Marca', reference: 'marca'},
    {header: 'Precio', reference: 'price'},
    {header: 'Accion', reference: 'action'}
  ]

  const handelEditMode = (e) => {
    if (!e) {
      setEditMode(false)
      setProduct(productInitialState)
      return
    } 
    setEditMode(true)
    setProduct({
      id: e.id,
      name: e.name,
      price: e.price,
      marca: e.marca
    })
  }

  const productTableOptions = () => {
    return products.map(e => {
      e.action = (<>
        <Button onClick={() => handelEditMode(e)}>Editar</Button>
        </>)
      return e
    })
  }

  const handelChangeInput = (e) => {
    setProduct(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handelSubmitForm = (e) => {
    e.preventDefault()
    if (!product.name.trim()) return console.log('todo mla')
    if (!product.marca.trim()) return console.log('todo mal')
    if (!product.price === 0) return console.log('todo mal')

    if (!editMode) {
      addProduct(product)
        .then(setProducts)
    } else {
      //editProduct(product.id, product)
        //.then(res => setProducts(res))
      setEditMode(false)
    }
    setProduct(productInitialState)
    inputProductName.current.focus()
  }

  useEffect(() => {
    fetchProducts().then(setProducts)
    inputProductName.current.focus()
  }, [])
  return (
    <Container as='main' p={1}>
      <Card title='Productos'>
        <Flex>
          <FlexItem size={2}>
            <h5 style={{marginBottom: '10px'}}>Listado</h5>
            <Table 
              headers={headers}
              data={productTableOptions()}
            />
          </FlexItem>
          <FlexItem size={1}>
            <Form title='Agragr Producto' onSubmit={handelSubmitForm}>
              <Input 
                placeholder='Nombre del Productos' 
                type='text' 
                ref={inputProductName}
                value={product.name}
                name='name'
                onChange={handelChangeInput}
              />
              <Input 
                placeholder='Precio' 
                type='number' 
                name='price'
                value={product.price}
                onChange={handelChangeInput}
              />
              <Input 
                placeholder='Marca'
                type='text'
                name='marca'
                value={product.marca}
                onChange={handelChangeInput}
              />
              <Button>{editMode ? 'Editar': 'Agregar'} Producto</Button>
              {editMode && 
                <Button 
                  type='button'
                  onClick={() => handelEditMode()}
                >Cancerlar</Button>
              }
            </Form>
          </FlexItem>
        </Flex>
      </Card>
    </Container>
  )
}
