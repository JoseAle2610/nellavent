import styled from 'styled-components'

const Button = styled.button`
  --color: ${({theme}) => theme.color.primary};
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: .5em 2em;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  border-radius: ${({theme}) => theme.radius};
  color: var(--color); 
  &:hover {
    transform: scale(.1);
  }
  &:active{
    background: ${({theme}) => theme.color.primary};
    filter: brightness(.9);
  }
`

export default Button
