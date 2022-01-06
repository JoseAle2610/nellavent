import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
`

Flex.defaultProps = {
  direction: 'row'
}

export const FlexItem = styled.div`
  flex: ${props => props.size};
  padding: 0 .3rem;
`

FlexItem.defaultProps = {
  size: 1
}
