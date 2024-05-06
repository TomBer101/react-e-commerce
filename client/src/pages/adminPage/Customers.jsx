import React from 'react';
import { useState, useEffect } from 'react';

import  Typography  from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { combineUserData } from '../../services/usersService';
import Table from '../../components/common/Table';

function Customers() {

    const users = useSelector(state => state.users.users)
    const purchases = useSelector(state => state.purchases.purchases);
    const products = useSelector(state => state.products.products)

   console.log('users: ', users, 'purchases: ', purchases, 'products: ', products);

    
    const [combinedUserData, setCombinedUserData] = useState(null);

    useEffect(() => {
        console.log(' ************ states within useeffect: ********');
   console.log('users: ', users, 'purchases: ', purchases, 'products: ', products);

        if (users.length > 0 && purchases.length > 0 && products.length > 0) {
            console.log('HERE');
            const usersData = combineUserData(users, purchases, products);
            setCombinedUserData(usersData);
        }
    }, [users, purchases, products]);

    useEffect(() => {
        console.log('combined data changed: ',combinedUserData);
    }, [combinedUserData])

    // user table -> user.purchase table + take the name

    return (
        <div className='customers'>
            <Typography fontWeight='400' align='justify' variant='h2'>Customers</Typography>
            {combinedUserData && <Table data={combinedUserData} />}
        </div>
    );
}

export default Customers;