import React from 'react';

const Panel = ({ children }) => (
    <div className='px-4 py-6 bg-white rounded-xl border-gray-300 border'>
        {children}
    </div>
)

const Header = ({ children }) => <h2 className='font-bold text-2xl mb-4'>{children}</h2>;

const Body = ({ children }) => <div>{children}</div>;

const Footer = ({ children }) => <div className='mt-4'>{children}</div>;

Panel.Header = Header;
Panel.Body = Body;
Panel.Footer = Footer;

export default Panel;
