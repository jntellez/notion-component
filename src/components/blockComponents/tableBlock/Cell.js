import { useState, useEffect, useRef } from 'react';
import Input from '../../Input';

import './table.css';

const Cell = ({ text, onChange, canBeEditable }) => {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(text)

    useEffect(() => {
        setValue(text)
    }, [text])

    useEffect(() => {
        if(editable) ref.current.focus()
    }, [editable])

    const ref = useRef(null)

    const handleOnDoubleClick = () => {
        if(canBeEditable) setEditable(true)
    }

    const handleOnChange = e => setValue(e.target.value)

    const handleOnBlur = () => {
        onChange(value)
        setEditable(false)
    }

    const handleOnKeyDown = e => {
        if(e.key === 'Enter') e.target.blur()
    }
    
    if(editable) {
        return (
            <td>
                <Input
                    ref={ref}
                    value={value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    onKeyDown={handleOnKeyDown}
                />
            </td>
        )
    }

    return (
        <td key={crypto.randomUUID()} onDoubleClick={handleOnDoubleClick}>
            {value}
        </td>
    )
}

export default Cell;