import React from 'react';
import { Box } from '@mui/material';
import SignUpForm from '../../components/forms/SignUpForm';

const AccountPage = () => {
    return (
        <Box sx={{backgroundColor : '#e0e0e0', margin : '0', width : '33%', padding : '2%', minWidth : '190px'}}>
            <SignUpForm buttonTerm={'Save!'} />
        </Box>
    );
};

export default AccountPage;