import { forwardRef } from 'react';
import Input from '../../Input';

const TodoBlock = ({ item, onChange, onKeyDown, focus }, ref) => {

    const handleOnChange = e => onChange(item, e)

    const handleOnKeyDown = e => onKeyDown(e)

    return (
        <div>
            <input
                type="checkbox"
                name="checkbox"
                checked={Boolean(item.completed)}
                onChange={handleOnChange}
            />
            <Input
                value={item.text}
                name="text"
                ref={focus ? ref : null}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}>
            </Input>
        </div>
    )
}

export default forwardRef(TodoBlock);