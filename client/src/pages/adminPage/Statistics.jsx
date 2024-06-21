import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import ProductSalesChart from '../../components/admin/statistics/ProductSalesChart';
import SalesPerCustomer from '../../components/admin/statistics/SalesPerCustomer'


const Statistics = () => {


    // TODO: slide between two grapsh
    return (
        <div className='statistics-page' style={{height : '100%'}}>
            <h3>Statictaocs page</h3>
            <ProductSalesChart />
            <SalesPerCustomer />
        </div>
    );
};

export default Statistics;