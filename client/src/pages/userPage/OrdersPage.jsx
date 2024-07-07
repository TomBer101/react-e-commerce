import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box'

import PurchasesTable from '../../components/common/PurchasesTable';
import { useAuth } from '../../contexts/AuthContext';
import { useSelector } from 'react-redux';
import { getPurchasesByUser } from '../../redux/selectors/purchases';

const OrdersPage = () => {
    const { currentUser } = useAuth();
    const products = useSelector(state => state.products.products);
    console.log(products);
    const usersPurchases = useSelector(state => getPurchasesByUser(state, currentUser.userName));

    const purchasesWithProductName = useMemo(() => {
        return usersPurchases.map(purchase => {
            const product = products.find(prod => prod.id === purchase.productId);
            return {
                ...purchase,
                productName: product? product.title : "Unknown"
            }
        })
    }, [usersPurchases, products])

    return (
        <Box maxHeight='75vh'>
            
            <PurchasesTable purchases={purchasesWithProductName}/>
        </Box>
    );
};

export default OrdersPage;