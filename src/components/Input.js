import styled, { css } from 'styled-components';

const Input = styled.input`
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
    outline: none;

    ${props =>
    props.border &&
    css`
        border-bottom: solid 1px #f7f7f7;
        border-left: solid 2px #ccc;
    `}

    @media (max-width: 400px) {
        padding: 10px 20px;
        font-size: 16px;
    }
`

export default Input;