import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  padding: ${props => props.p}em 0;
`

Container.defaultProps = {
  p: 0
}
