import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../../components/common/NavBar';


const UserLayout = () => {


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