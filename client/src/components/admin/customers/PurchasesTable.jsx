import React from 'react'

import GenericTable from '../../common/Table';

const columns = [
    { header: 'Name', accessor: 'userId' },
    { header: 'Qty', accessor: 'quantity' },
    { header: 'Date', accessor: 'date', render: (timeStamp) => <span>{`${timeStamp.toDate().toLocaleDateString()}`}</span> },
  ];

const PurchasesTable = ({ purchases }) => {

  
    return <GenericTable data={purchases} columns={columns} />;
  };

  export default PurchasesTable;