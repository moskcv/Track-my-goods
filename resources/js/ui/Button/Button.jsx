import React from 'react';

const Button = ({ type = 'button', onClick, content }) => {
    return (
        <button type={type} onClick={onClick}>{content}</button>
    )
}

export default Button;
