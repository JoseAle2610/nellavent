import styled from 'styled-components'

const CardContainer = styled.section`
  background-color: rgba(230, 230, 230, .05);
  padding: 1rem;
  border-radius: 10px;
`

export const CardHeader = styled.header`
  padding-bottom: .4rem;
  border-bottom: 1px solid ${props => props.theme.fontColor};
`

const CardBody = styled.div`
  padding-top: 1rem;
`

export const Card = ({title, children}) => {
  return (
    <CardContainer>
      {title && <CardHeader>
        <h3>{title}</h3>
      </CardHeader>}
      <CardBody>
        {children}
      </CardBody>
    </CardContainer>
  )
}
