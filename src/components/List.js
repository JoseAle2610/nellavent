import styled from 'styled-components'

const ListContainer = styled.ul`
  list-style: none;
`

const ListItem = styled.li`

`

export const List = () => {
  return (
    <ListContainer>
      <ListItem>hola</ListItem>
      <ListItem>hola</ListItem>
      <ListItem>hola</ListItem>
      <ListItem>hola</ListItem>
    </ListContainer>
  )
}
