import {useState, useEffect} from 'react'
import {fetchProducts} from 'services/products'
import {Container} from 'components/Container'
import {Card} from 'components/Card'
import {Form} from 'components/Form'
import {Input} from 'components/Input'
import {Button} from 'components/Button'
import {Flex, FlexItem} from 'components/Flex'
import {Table} from 'components/Table'

export const Products = () => {
  const [products, setProducts] = useState([])
  const headers = [
    {header: 'Nombre', reference: 'name'},
    {header: 'Marca', reference: 'marca'},
    {header: 'Precio', reference: 'price'}
  ]

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])
  return (
    <Container as='main' p={1}>
      <Card title='Productos'>
        <Flex>
          <FlexItem size={2}>
            <Table 
              headers={headers}
              data={products}
            />
          </FlexItem>
          <FlexItem size={1}>
            <Form title='Agragr Producto'>
              <Input placeholder='Nombre del Productos' type='text' />
              <Input placeholder='Precio' type='number' />
              <Input placeholder='Marca' type='text' />
              <Button>Agregar Producto</Button>
            </Form>
          </FlexItem>
        </Flex>
      </Card>
    </Container>
  )
}
