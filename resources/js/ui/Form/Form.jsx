import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Toggle from '../Toggle/Toggle';

const Form = ({ onSubmit, children }) => {
    const handleFormSubmit = e => {
        e.preventDefault();

        if (typeof onSubmit === 'function') {
            onSubmit();
        }
    }

    return (
        <form noValidate onSubmit={handleFormSubmit}>{ children }</form>
    )
}

const Group = ({ children }) => (
    <div className='flex gap-4 w-full flex-col md:flex-row'>
        { children }
    </div>
)

Form.Input = Input;
Form.Select = Select;
Form.Group = Group;
Form.Toggle = Toggle;

export default Form;
