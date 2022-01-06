import styled from 'styled-components'

const Interest = styled(({className, icon, title, from}) => {
  const prefix = (from === 'bootstrap') ? 'bi bi-' : 'devicon-'
  return(
    <div className={className}>
      <i className={prefix + icon} /> 
      <label>{title}</label>
    </div>
  )
})`
  display: inline-block;
  min-width: 80px;
  padding: .5em;
  background-color: ${({theme}) => theme.color.dark};
  border-radius: ${({theme}) => theme.radius};
  color: #fff;
  margin-left: 10px;
  margin-top: 10px;
  i {
    display: block;
    font-size: 32px;
    text-align: center;
    line-height: 1.1em;
  }
  label {
    display: block;
    text-align: center;
  }
`

export default Interest
