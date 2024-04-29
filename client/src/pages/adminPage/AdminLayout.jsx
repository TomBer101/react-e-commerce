import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import { Container } from '@mui/material';

// TODO : import navbar content here and pas it as props ? => re render each time layout re renders (?)

const AdminLayout = () => {
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