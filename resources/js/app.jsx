import './bootstrap';
import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className='text-4xl font-bold underline'>Hi</div>
    )
}

const domContainer = document.getElementById('app');
const root = ReactDOM.createRoot(domContainer);

root.render(<App />);
