import {useState, useEffect} from 'react'
import {fetchClients, addPurchase, getPurchases, addPayment, getPayments} from 'services/clientsFirebase'
import {fetchProducts} from 'services/productsFirebase'
import {Container} from 'components/Container'
import {Card} from 'components/Card'
import {Flex, FlexItem} from 'components/Flex'
import {Table} from 'components/Table'
import {Form} from 'components/Form'
import {Input} from 'components/Input'
import {Button} from 'components/Button'

export const Clients = () => {
  const purchaseInitialState = {
    productId: '',
    cant: ''
  }
  const paymentInitialState = {
    ref: '',
    amount: '',
  }
  const [client, setClient] = useState({})
  const [clients, setClients] = useState([])
  const [purchase, setPurchase] = useState(purchaseInitialState)
  const [purchases, setPurchases] = useState([])
  const [payment, setPayment] = useState(paymentInitialState)
  const [payments, setPayments] = useState([])
  const [products, setProducts] = useState([])

  const tableOptions = () => {
    return clients.map(e => {
      e.action = <Button onClick={() => {
        setClient(e)
        getPurchases(e.id).then(setPurchases)
        getPayments(e.id).then(setPayments)
      }}>Cargar detalle</Button>
      return e
    })
  }

  const handelFormPurchase = (e) => {
    e.preventDefault()
    console.log('addShopping')
    addPurchase(client.id, purchase).then(res => console.log(res))
  }
  const handelChangePurchase= (e) => {
    setPurchase(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handelFormPayment = (e) => {
    e.preventDefault()
    console.log('addPayments')
    addPayment(client.id, payment).then(res => console.log(res))
  }
  const handelChangePayment = (e) => {
    setPayment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    fetchClients().then(setClients)
    fetchProducts().then(setProducts)
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
                {header: 'Producto', reference: 'name'},
                {header: 'Cantidad', reference: 'cant'}
              ]}
              data={purchases.map(e => {
                const product = products.find(item => e.productId === item.id)
                if (product !== undefined){
                  e.name = products.find(item => e.productId === item.id).name
                }
                return e
              })}
            />
            <Table
              title='Pagos'
              headers={[
                {header: 'Monto', reference: 'amount'},
                {header: 'Referencia', reference: 'ref'},
              ]}
              data={payments}
            />
          </FlexItem>
          <FlexItem size={1}>
            <Form title='Agregar Compra' onSubmit={handelFormPurchase}>
              <select
                name='productId'
                value={purchase.productId}
                onChange={handelChangePurchase}
              >
                <option>Escoje alguna</option>
                {products.map(e => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
              <Input
                type='number'
                placeholder='cantidad'
                name='cant'
                value={purchase.cant}
                onChange={handelChangePurchase}
              />
              <Button>Guardar Compra</Button>
            </Form>
            <Form title='Agregar Pago' onSubmit={handelFormPayment}>
              <Input
                type='number'
                placeholder='Monto'
                name='amount'
                value={payment.amount}
                onChange={handelChangePayment}
              />
              <Input
                placeholder='Numero de referencia'
                name='ref'
                value={payment.ref}
                onChange={handelChangePayment}
              />
              <Button>Guardar Pago</Button>
            </Form>
          </FlexItem>
        </Flex>
      </Card>
    </Container>
  )
}
