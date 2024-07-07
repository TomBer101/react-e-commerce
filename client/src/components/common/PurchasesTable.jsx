import React from 'react'

import GenericTable from './Table';
import { useAuth } from '../../contexts/AuthContext';

const adminColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Qty', accessor: 'quantity' },
    { header: 'Date', accessor: 'date', render: (timeStamp) => <span>{`${timeStamp.toDate().toLocaleDateString()}`}</span> },
];

const clientColumns = [
    { header: 'Title', accessor: 'productName' },
    { header: 'Qty', accessor: 'quantity' },
    { header: 'Total', accessor: 'price', render: total => <span>{`$${total}`}</span>},
    { header: 'Date', accessor: 'date', render: (timeStamp) => <span>{`${timeStamp.toDate().toLocaleDateString()}`}</span> },
]

const PurchasesTable = ({ purchases }) => {
    const { currentUser } = useAuth();
    const columns = currentUser.role === 'admin'? adminColumns : clientColumns;


    return <GenericTable data={purchases} columns={columns} />;
  };

  export default PurchasesTable;