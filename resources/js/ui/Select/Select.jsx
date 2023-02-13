import React, { useMemo } from 'react';
import { Listbox } from '@headlessui/react';

const Select = ({ value, label, required, options = [], onChange, placeholder = 'Виберіть...' }) => {
    const selectedValue = useMemo(() => {
        const index = options.findIndex(o => o.value == value);

        return index === -1 ? null : options[index];
    }, [value, options])

    return (
        <Listbox value={selectedValue} onChange={onChange} as='div' className='mb-4 flex-1 relative'>
            {label &&
                <Listbox.Label className='block mb-2'>
                    {label}
                    {required &&
                        <span className='text-red-500'> *</span>
                    }
                </Listbox.Label>
            }
            <Listbox.Button className='px-3 py-2 border border-gray-500 w-full text-left focus:ring-2 focus:outline-offset-2 focus:outline-blue-500 focus:border-blue-500'>{selectedValue?.text ? selectedValue.text : placeholder}</Listbox.Button>
            <Listbox.Options className='absolute z-10 w-full bg-white px-3 py-2 max-h-64 overflow-x-auto border border-gray-500'>
            {options.map((option) => (
                <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className='cursor-pointer'
                >
                    {option.text}
                </Listbox.Option>
            ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default Select;
