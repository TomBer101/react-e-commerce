import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import  Checkbox  from '@mui/material/Checkbox';
import  FormControlLabel  from '@mui/material/FormControlLabel';
import  Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const SignUpPage = () => {
    const {error, loading, onLogin } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData = {
            userName: data.get('userName'),
            password: data.get('password'),
        }
        console.log(userData);
        await onLogin(userData);

    };

    return (
        <Container sx={{backgroundColor : '#e0e0e0', margin : '0', padding : '2%', minWidth : '190px'}}>
            <Box sx={{backgroundColor : 'white', padding : '8%'}}>
                <Typography minWidth={'109px'} margin={'auto'} textAlign={'center'} fontWeight={'bold'} component='h6' variant='h6' >Next Generation E-Commerce</Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userNAme"
                        label="User Name"
                        name="userName"
                        variant='outlined' 
                        size='small'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        variant='outlined'
                        type='password'
                        size='small'
                    />
                    <Button variant='contained' type='submit' sx={{width : '100%', margin : '10px 0'}}>Login</Button>
                    <div>
                        New user? <Link to='register'>Register</Link>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUpPage;