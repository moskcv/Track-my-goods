import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Hi</div>
    )
}

const domContainer = document.getElementById('app');
const root = ReactDOM.createRoot(domContainer);

root.render(<App />);
