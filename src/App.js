import {ThemeProvider} from 'styled-components'
import {theme} from 'theme'
import Global from 'share/Global'
import {Navbar} from 'components/Navbar'
import {Products} from 'pages/Products'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Navbar
        brand='NellaVent'
      ></Navbar>
      <Products></Products>
    </ThemeProvider>
  );
}

export default App;
