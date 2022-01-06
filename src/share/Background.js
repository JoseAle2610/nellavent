import styled from 'styled-components'
import wave from './wave.svg'
import {Fragment} from 'react'

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${(props) => props.theme.color.primary};
`

const Shape = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  padding: 0;
  top: 99%;
  border: none;
  height: 300px;
  z-index: -1;
  background-image: url('${wave}');
  background-size: cover;
`
const Background = () => (
  <Fragment>
    <BackgroundColor />
    <Shape />
  </Fragment>
)

export default Background
