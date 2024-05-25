// src/components/UserTable.js
import React from 'react';

import PurchasesTable from './PurchasesTable';
import GenericTable from '../../common/Table';

const columns = [
    { header: 'Full Name', accessor: 'userName' },
    { header: 'Joined At Date', accessor: 'registerDate' },
    {
      header: 'Product Bought',
      accessor: 'purchases',
      render: (purchases) => <PurchasesTable purchases={purchases} />,
    },
  ];

const UserTable = ({ users }) => {

  return <GenericTable data={users} columns={columns} />;

};



export default UserTable;
