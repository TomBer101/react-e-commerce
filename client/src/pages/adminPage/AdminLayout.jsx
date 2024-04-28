import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import { Container } from '@mui/material';

// TODO : import navbar content here and pas it as props ? => re render each time layout re renders (?)

const AdminLayout = () => {
    return (
        <div>
            <NavBar />
            <Container sx={{marginTop : '7rem', padding : '5rem', backgroundColor : '#d5d5d5'}}>
            <Outlet />

            </Container>
        </div>
    );
};

export default AdminLayout;