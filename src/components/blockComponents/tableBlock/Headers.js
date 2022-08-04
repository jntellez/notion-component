const Headers = ({ columns }) => {
    return (
        <tr>
            {columns.map(column => <th key={column}>{column}</th>)}
        </tr>
    )
}

export default Headers;