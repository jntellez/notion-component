import { forwardRef } from 'react';
import Input from '../../Input';

const TextBlock = ({ item, onChange, onKeyDown, focus }, ref) => {

    const handleOnChange = e => {
        onChange(item, e)
    }

    const handleOnKeyDown = e => {
        if(e.key === 'Enter') onKeyDown(e)
    }

    return (
        <Input
            border
            value={item.text}
            ref={focus ? ref : null}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}>
        </Input>
    )
}

export default forwardRef(TextBlock);