import React, { useEffect } from 'react';
import PurchasesTable from '../../components/common/PurchasesTable';
import { useAuth } from '../../contexts/AuthContext';
import { useSelector } from 'react-redux';
import { getPurchasesByUser } from '../../services/purchasesService';

const OrdersPage = () => {
    const { currentUser } = useAuth();
    const usersPurchases = useSelector(state => getPurchasesByUser(state, currentUser.userName));

    return (
        <Box>
            <h5>orders</h5>
            <PurchasesTable purchases={usersPurchases}/>
        </Box>
    );
};

export default OrdersPage;