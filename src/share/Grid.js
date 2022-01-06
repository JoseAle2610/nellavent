import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
`

const media = {
  xs: (styles) => `
    @media (min-width: 480px) {
      ${styles}
    }
  `
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`flex: none; width: 100%;`)}
`
