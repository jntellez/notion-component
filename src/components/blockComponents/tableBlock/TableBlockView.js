import Button from '../../Button';
import TableBlock from './TableBlock';

const TableBlockView = ({
    columns,
    onChange,
    onCreate,
    data,
    onCreateNewColumn
}) => {

    const handleNewColumn = () => {
        const name = prompt('Name of the new column')
        if(name) {
            onCreateNewColumn(name)
        }
    }

    const handleNewRow = () => onCreate()

    const handleOnChange = (rowIndex, property, value) => {
        const item = (data[rowIndex][property] = value)
        onChange({
            updatedItem: item
        })
    }

    return (
        <div>
            <Button onClick={handleNewColumn}>Add new columns</Button>
            <Button onClick={handleNewRow}>Add new row</Button>

            <TableBlock
                columns={columns}
                data={data}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default TableBlockView;