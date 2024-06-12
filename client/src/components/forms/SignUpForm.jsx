import React from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';


const SignUpForm = ({handleSubmit, buttonTerm}) => {

    return (
        <Box component='form' >
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
        <Button variant='contained' type='submit'>{buttonTerm}</Button>
    </Box>
    );
};

export default SignUpForm;