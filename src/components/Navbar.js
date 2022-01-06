import styled from 'styled-components'
import {Container} from 'components/Container'

const NavbarContainer = styled.nav`
  background-color: ${props => props.color || props.theme.primary};
  color: white;
`
const NavbarCenter = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavbarBrand = styled.div`
  display: inline-block;
  font-size: 2em; 
  font-weight: 700;
  padding: .1em 0;
`

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  float: right;
`

const NavbarLink = styled.li`
  text-decoration: none;
  padding: .2em .3em;
  color: #fff;
  border-radius: 5px;
  &:hover{
    background-color: rgba(0, 0, 0, .2)
  }
`

export const Navbar = (props) => {
  return (
    <NavbarContainer>
      <NavbarCenter>
        <NavbarBrand>
          {props.brand}
        </NavbarBrand>
        <NavbarLinks>
          <NavbarLink>hoal</NavbarLink> 
          <NavbarLink>hoal</NavbarLink> 
          <NavbarLink>hoal</NavbarLink> 
        </NavbarLinks>
      </NavbarCenter>
    </NavbarContainer>
  )
}
