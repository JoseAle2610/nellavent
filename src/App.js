import {ThemeProvider} from 'styled-components'
import {theme} from 'theme'
import Global from 'share/Global'
import {Navbar} from 'components/Navbar'
import {Products} from 'pages/Products'
import {Clients} from 'pages/Clients'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Global />
      <Navbar brand='NellaVent'>
        <Link to='/'>Productos</Link>
        <Link to='/clients'>Clients</Link>
      </Navbar>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/clients' element={<Clients />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
