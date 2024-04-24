import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import  Checkbox  from '@mui/material/Checkbox';
import  FormControlLabel  from '@mui/material/FormControlLabel';
import  Button  from '@mui/material/Button';

import { useAuth } from '../contexts/AuthContext';

const SignUpPage = () => {
    const {error, loading, onSignup } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            userName: data.get('userName'),
            password: data.get('password'),
            shareData : data.get('shareData'),
        }
        console.log(userData);
        onSignup(userData);
    };
    
    return (
        <Container sx={{backgroundColor : '#e0e0e0', margin : '0', width : '33%', padding : '2%', minWidth : '190px'}}>
            <Box sx={{backgroundColor : 'white', padding : '8%'}}>
                <Typography minWidth={'109px'} margin={'auto'} textAlign={'center'} fontWeight={'bold'} component='h6' variant='h6' sx={{width : '50%'}}>New User Registration</Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="fname"
                        label="First Name"
                        name="fname"
                        variant='outlined' 
                        size='small'
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="lname"
                        label="Last Name"
                        name="lname"
                        variant='outlined'
                        size='small'
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="user-name"
                        label="User Name"
                        name="userName"
                        variant='outlined'
                        size='small'
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        variant='outlined'
                        type='password'
                        size='small'
                    />
                    <FormControlLabel control={<Checkbox name='shareData' />} label='Allow others to see my orders' />
                    <Button variant='contained' type='submit'>Create</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUpPage;