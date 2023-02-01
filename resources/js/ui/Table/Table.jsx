import React from 'react';

const ALIGNMENT_CLASSES = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
}

const Table = ({ children }) => (
    <div className='overflow-x-auto'>
        <div className='inline-block min-w-full'>
            <div className='overflow-hidden border border-gray-300 rounded-xl'>
                <table className='table-fixed min-w-full'>{ children }</table>
            </div>
        </div>
    </div>
)

const Header = ({ children }) => <thead className='border-b bg-gray-50'>{ children }</thead>

const Body = ({ children }) => <tbody>{ children }</tbody>

const Footer = ({ children }) => <tfoot>{ children }</tfoot>

const Row = ({ children }) => <tr scope='row' className='border-b border-gray-300 hover:bg-gray-100'>{ children }</tr>

const HeaderCell = ({ align = 'left', onClick, children }) => <th onClick={onClick} className={`font-bold px-6 py-4 ${ALIGNMENT_CLASSES[align]}`}>{ children }</th>

const Cell = ({ align = 'left', children }) => <td className={`px-6 py-4 whitespace-nowrap ${ALIGNMENT_CLASSES[align]}`}>{ children }</td>

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export default Table;
