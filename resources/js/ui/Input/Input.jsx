import React from 'react';
import { uniqueId } from 'lodash';

const Input = ({ type = 'text', label, value, required, onChange }) => {
    const id = uniqueId();

    return (
        <div className='mb-4 flex-1'>
            {label &&
                <label htmlFor={id} className='block mb-2'>
                    {label}
                    {required && <span className='text-red-500'> *</span>}
                </label>
            }
            <input type={type} value={value} onChange={onChange} required={required} className='w-full' />
        </div>
    )
}

export default Input;
