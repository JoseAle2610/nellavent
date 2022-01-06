import styled from 'styled-components'

const FormContainer = styled.form`
  display: block;
  * {
    ${props => props.d === 'block' ?
    `display: ${props.d}; width: 100%; margin-bottom: 10px`:
    `display: ${props.d}; margin-right: 10px;`
    }
  }
`

export const Form = (props) => {
  return (
    <FormContainer d={props.d}>
      <h5>{props.title}</h5>
      {props.children}
    </FormContainer>
  )
}

Form.defaultProps = {
  d: 'block',
  title: 'Form'
}
