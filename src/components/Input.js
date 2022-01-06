import styled from 'styled-components'

export const Input = styled.input`
  display: inline-block;
  border: none;
  border-radius: 10px;
  background-color: rgba(230, 230, 230, .1);
  padding: .5em;
  color: ${props => props.theme.light};
  &:focus {
    box-shadow: 0 0 5px rgba(230, 230, 230, .1);
  }
`
