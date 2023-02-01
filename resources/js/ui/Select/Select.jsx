import { uniqueId } from 'lodash';
import React from 'react';

const Select = ({ value, label, required, options = [], onChange }) => {
    const id = uniqueId();

    return (
        <div className='mb-4 flex-1'>
            {label &&
                <label htmlFor={id} className='block mb-2'>
                    {label}
                    {required && <span className='text-red-500'> *</span>}
                </label>
            }
            <select className='w-full' onChange={onChange} required={required} value={value}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
