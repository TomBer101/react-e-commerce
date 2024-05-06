import React, { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import { Container } from '@mui/material';
import { getAllCustomers } from '../../services/usersService';
import { fetchUsersData, fetchUsersSuccess } from '../../redux/actions/admin/userAction';
import { getAllPurchases } from '../../services/purchasesService';
import { getAllProducts } from '../../services/productsService';

// TODO : import navbar content here and pas it as props ? => re render each time layout re renders (?)

const AdminLayout = () => {

    const dispatch = useDispatch()



    useEffect(() => {
        const usersUnsubscribe  = getAllCustomers(dispatch);
        const productsUnsubscribe  = getAllProducts(dispatch);
        const purchasesUnsubscribe  = getAllPurchases(dispatch);

        // const unsubscribe = dispatch(fetchUsersData());

    }, [])

    // useEffect(() =>{
    // }, [])

    // useEffect(() =>{
    // }, [])



    return (
        <div>
            <NavBar />
            <Container maxWidth={false} sx={{marginTop : '7rem', padding : '1rem', backgroundColor : '#e3e3e3', height : '83vh'}}>
            <Outlet />

            </Container>
        </div>
    );
};

export default AdminLayout;