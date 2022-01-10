import styled from 'styled-components'

export const Button = styled.button`
  --color: ${({theme}) => theme.primary};
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 1;
  padding: .5rem;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color .5s;
  min-width: 218px;
  border-radius: 10px;
  font-weight: 500;
  background-color: var(--color);
  color: ${props => props.theme.light};
  &:hover {
    color: ${({theme}) => theme.light};
    filter: brightness(.9);
  }
  &:active {
    transform: scale(.99);
  }
`

export default Button
