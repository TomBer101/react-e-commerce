import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../../components/common/NavBar';
import { useDispatch } from 'react-redux';
import { getAllPurchases } from '../../services/purchasesService';
import { getAllProducts } from '../../services/productsService';
import { getAllCategories } from '../../services/categoriesService';

const UserLayout = () => {
    const { currentUser } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('corrent user: ', currentUser);
        if (currentUser) {
            const purchasesUnsubscribe  = getAllPurchases(dispatch, currentUser.userName);
            const productsUnsubscribe  = getAllProducts(dispatch);
            const categoriesUnsubscribe = getAllCategories(dispatch);
        }
    }, [currentUser])



    return (
        <div>
            <NavBar />
            <Container maxWidth={false} sx={{marginTop : '7rem', padding : '1rem', backgroundColor : '#e3e3e3', height : '83vh'}}>
            <Outlet />

            </Container>
        </div>
    );
};

export default UserLayout;