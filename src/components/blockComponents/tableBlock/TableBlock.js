import Cell from './Cell';
import Headers from './Headers';

const TableBlock = ({ columns, data, onChange }) => {
    return (
        <table>
            <thead>
                <Headers columns={columns} />
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={crypto.randomUUID()}>
                        {columns.map((cell, cellIndex) => (
                            <Cell
                                key={crypto.randomUUID()}
                                text={row[cell].toString() ?? ''}
                                onChange={value => onChange(rowIndex, cell, value)}
                                canBeEditable={columns[cellIndex] !== 'id'}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableBlock;