import { useState, useRef } from 'react';
import TextBlockView from './blockComponents/textBlock/TextBlockView';
import TodoBlockView from './blockComponents/todoBlock/TodoBlockView';
import TableBlockView from './blockComponents/tableBlock/TableBlockView'
import Button from './Button';

import './BlockView.css';

const BlockView = () => {
    const ref = useRef(null)

    const [currentItem, setCurrentItem] = useState(null)
    const [type, setType] = useState('text') // table, todo
    const [properties, setProperties] = useState(['id', 'text', 'completed'])
    const [visible, setVisible] = useState(false)

    const [data, setData] = useState([{
        id: crypto.randomUUID(),
        text: 'first cell',
        completed: false,
    }])

    const handleOnChange = item => {
        const { id, text, type } = item

        if(type === 'text') {
            const temp = [...data]
            const editItem = temp.find(i => i.id === id)

            if(editItem) {
                editItem.text = text
                setData(temp)
            }
        }

        if(type === 'todo') {
            const temp = [...data]
            const editItem = temp.find(i => i.id === id)

            if(editItem) {
                editItem.text = text ?? editItem.text
                editItem.completed = item.completed ?? editItem.completed
                setData(temp)
            }
        }

        if(type === 'table') {
            const temp = [...data]
            let editItem = temp.find(i => i.id === id)

            if(editItem) {
                editItem = item.updatedItem
                setData(temp)
            }
        }
    }

    const handleOnCreate = () => {
        const newItem = {
            id: crypto.randomUUID(),
            text: 'new cell',
            completed: false,
        }

        properties.forEach(prop => {
            if(!newItem.hasOwnProperty(prop)) {
                newItem[prop] = ''
            }
        })

        const temp = [...data, newItem]
        setData(temp)
        setCurrentItem(newItem)
    }

    const handleNewColumn = name => updateProperties(name)

    const updateProperties = name => {
        const newProperties = [...properties, name]

        const temp = [...data]
        temp.forEach(item => {
            newProperties.forEach(prop => {
                if(!item.hasOwnProperty(prop)) {
                    item[prop] = ''
                }
            })
        })

        setProperties(newProperties)
        setData(temp)
    }

    const handleOnClick = (type) => {
        setType(type)
        setVisible(false)
    }

    const TypeSelector = () => {
        return (
            <div style={{ positoin: 'relative', marginTop: '20px' }}>
                <Button inverted menu onClick={() => setVisible(!visible)}>...</Button>
                <div className="typeSelectorButtons" style={{ display: visible ? 'flex' : 'none'}}>
                    <button className="blockViewButton" onClick={() => handleOnClick('text')}>Text</button>
                    <button className="blockViewButton" onClick={() => handleOnClick('todo')}>Todo</button>
                    <button className="blockViewButton" onClick={() => handleOnClick('table')}>Table</button>
                </div>
            </div>
        )
    }

    if(type === 'todo') {
        return (
            <div className="blockViewContainer">
                <TypeSelector />
                <TodoBlockView
                    ref={ref}
                    focusId={currentItem?.id}
                    data={data}
                    onChange={handleOnChange}
                    onCreate={handleOnCreate}
                />
            </div>
        )
    }

    if(type === 'table') {
        return (
            <div className="blockViewContainer">
                <TypeSelector />
                <TableBlockView
                    columns={properties}
                    focusId={currentItem?.id}
                    data={data}
                    onChange={handleOnChange}
                    onCreate={handleOnCreate}
                    onCreateNewColumn={handleNewColumn}
                />
            </div>
        )
    }
    
    return (
        <div className="blockViewContainer">
            <TypeSelector />
            <TextBlockView
                ref={ref}
                focusId={currentItem?.id}
                data={data}
                onChange={handleOnChange}
                onCreate={handleOnCreate}
            />
        </div>
    )
}

export default BlockView;