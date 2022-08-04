import TextBlock from './TextBlock';
import { forwardRef, useEffect } from 'react';

const TextBlockView = ({ data, onChange, onCreate, focusId }, ref) => {

    useEffect(() => {
        if(focusId) {
            ref.current.focus()
            ref.current.select()
        }
    }, [focusId, ref])

    const handleOnChange = (item, e) => {
        onChange({
            type: 'text',
            id: item.id,
            text: e.target.value,
            completed: item.completed
        })
    }

    const handleOnKeyDown = e => {
        onCreate(e)
    }

    return data.map(item => (
        <TextBlock
            key={item.id}
            ref={ref}
            focus={focusId === item.id}
            item={item}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
        />
    ))
}

export default forwardRef(TextBlockView);