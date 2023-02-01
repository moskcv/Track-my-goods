import { Switch } from '@headlessui/react';
import React from 'react';

const Toggle = ({ enabled, label, onChange }) => {
    return (
        <Switch.Group>
            <div className='flex items-center gap-2'>
                <Switch
                    checked={enabled || false}
                    onChange={onChange}
                    className={`${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`
                    }
                >
                    <span
                        className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
                <Switch.Label>{ label }</Switch.Label>
            </div>
        </Switch.Group>
    );
}

export default Toggle;
