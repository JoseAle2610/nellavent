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
  transition: color .5s;
  border-radius: ${({theme}) => theme.radius};
  font-weight: 500;
  color: var(--color); 
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }
  &:hover {
    color: ${({theme}) => theme.color.light};
  }
  &:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
  }
  &:hover:before {
    top: -30px;
    left: -30px;
  }
  &:active:before {
    background: ${({theme}) => theme.color.primary};
    filter: brightness(.9);
    transition: background 0s;
  }
`

export default Button
