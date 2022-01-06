import styled from 'styled-components'

const TableContainer = styled.table`
  border-collapse: collapse;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  overflow: hidden;
  th, td {
    padding: .4em;
  }
  tbody tr:nth-child(even) {
    background-color: rgba(230, 230, 230, .1);
  }
`

const TableHeader = styled.thead`
  background-color: ${props => props.theme.primary}
`

export const Table  = (props) => {
  const {headers, data} = props
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          {headers.map((e, i) => (
            <th key={i}>{e.header}</th>
          ))}
        </tr>
      </TableHeader>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {headers.map((field, j) => (
              <td key={j}>{row[field.reference]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}
