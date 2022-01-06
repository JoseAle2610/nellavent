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
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: ${(props) => props.theme.success};
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }
  &:hover {
    color: ${({theme}) => theme.light};
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
    background: ${({theme}) => theme.success};
    filter: brightness(.9);
    transition: background 0s;
  }
`

export default Button
