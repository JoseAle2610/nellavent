import {useState, useEffect} from 'react'
import {fetchClients, addShopping, getPurchases} from 'services/clientsFirebase'
import {Container} from 'components/Container'
import {Card} from 'components/Card'
import {Flex, FlexItem} from 'components/Flex'
import {Table} from 'components/Table'
import {Form} from 'components/Form'
import {Input} from 'components/Input'
import {Button} from 'components/Button'

export const Clients = () => {
  const addShoppingInitialState = {
    productId: '',
    cant: 0
  }
  const [client, setClient] = useState({})
  const [clients, setClients] = useState([])
  const [shopping, setShopping] = useState(addShoppingInitialState)
  const [purchases, setPurchases] = useState([])

  const tableOptions = () => {
    return clients.map(e => {
      e.action = <Button onClick={() => {
        setClient(e)
        getPurchases(e.id).then(setPurchases)
      }}>client</Button>
      return e
    })
  }

  const handelFormShopping = (e) => {
    e.preventDefault()
    console.log('addShopping')
    addShopping(client.id, shopping).then(res => console.log(res))
  }
  const handelChangeShopping = (e) => {
    setShopping(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  //ZEoTad6KnCnZRaJTZZfH
  useEffect(() => {
    fetchClients().then(setClients)
  }, [])

  return (
    <Container p={1}>
      <Card title='Clientes'>
        <Flex>
          <FlexItem size={1}>
            <Table
              title='Listado'
              headers={[
                {header: 'Nombre', reference:'name'},
                {header: 'Action', reference: 'action'}
              ]}
              data={tableOptions()}
            />
          </FlexItem>
          <FlexItem size={1}>
            <h5 style={{marginBottom: '10px'}}>Detalles</h5>
            <Table 
              title='Compras'
              headers={[
                {header: 'Producto', reference: 'productId'},
                {header: 'Cantidad', reference: 'cant'}
              ]}
              data={purchases}
            />
            <Table
              title='Pagos'
              headers={[
                {header: 'Monto', reference: 'amount'},
                {header: 'Referencia', reference: 'ref'},
                {header: 'Fecha', reference:'date'}
              ]}
              data={[]}
            />
          </FlexItem>
          <FlexItem size={1}>
            <Form title='Agregar Compra' onSubmit={handelFormShopping}>
              <Input
                placeholder='Product id'
                name='productId'
                value={shopping.productId}
                onChange={handelChangeShopping}
              />
              <Input
                type='number'
                placeholder='cantidad'
                name='cant'
                value={shopping.cant}
                onChange={handelChangeShopping}
              />
              <Button>Guardar Compra</Button>
            </Form>
            <Form title='Agregar Pago'>
              <Input
                type='number'
                placeholder='Monto'
              />
              <Input
                placeholder='Numero de referencia'
              />
              <Button>Guardar Pago</Button>
            </Form>
          </FlexItem>
        </Flex>
      </Card>
    </Container>
  )
}
