import Container from './Container'
import {Title2} from './Title'

const PageTemplate = ({header, color, children}) => (
  <section>
    <Container>
      <Title2 color={color}>{header}</Title2>
      <div>{children}</div>
    </Container>
  </section>
)

export default PageTemplate
