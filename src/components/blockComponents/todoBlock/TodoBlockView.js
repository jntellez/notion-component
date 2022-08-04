import TodoBlock from './TodoBlock';
import { forwardRef, useEffect } from 'react';

const TodoBlockView = ({ data, onChange, onCreate, focusId }, ref) => {

    useEffect(() => {
        if(focusId) {
            ref.current.focus()
        }
    }, [focusId, ref])

    const handleOnChange = (item, e) => {
        const { name } = e.target

        switch(name) {
            case 'checkbox':
                onChange({ type: 'todo', id: item.id, completed: e.target.checked })
            break
            case 'text':
                onChange({ type: 'todo', id: item.id, text: e.target.value })
            break
            default:
                return
        }
    }

    const handleOnKeyDown = e => {
        if(e.key === 'Enter') onCreate(e)
    }

    return data.map(item => (
        <TodoBlock
            key={item.id}
            ref={ref}
            focus={focusId === item.id}
            item={item}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
        />
    ))
}

export default forwardRef(TodoBlockView);