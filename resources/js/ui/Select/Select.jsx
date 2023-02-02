import React, { useMemo } from 'react';
import { uniqueId } from 'lodash';

const Select = ({ value, label, required, options = [], onChange, allowEmpty = true }) => {
    const id = uniqueId();

    const renderOptions = useMemo(() => {
        const newOptions = [...options];

        if (allowEmpty) {
            newOptions.unshift({ value: '', text: '' });
        }

        return newOptions;
    }, [options, allowEmpty])

    return (
        <div className='mb-4 flex-1'>
            {label &&
                <label htmlFor={id} className='block mb-2'>
                    {label}
                    {required && <span className='text-red-500'> *</span>}
                </label>
            }
            <select className='w-full' onChange={onChange} required={required} value={value}>
                {renderOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
