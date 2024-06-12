import React, { useEffect, useState } from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';


const SignUpForm = ({handleSubmit, buttonTerm, userInfo}) => {

    const [userInfoInput, setUserInfoInput] = useState({
        fname: '',
        lname: '',
        userName: '',
        password: '',
        shareData: false
    })

    useEffect(() => {
        if (userInfo) {
            console.log(userInfo);
            const info = {
                fname: userInfo.name.split(' ')[0],
                lname: userInfo.name.split(' ')[1],
                userName: userInfo.userName,
                password: '',
                shareData: userInfo.shareData
            }

            setUserInfoInput(info);
        }
    }, [userInfo])

    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(`${name} and ${value}`);
        setUserInfoInput({
            ...userInfoInput,
            [name]: value
        })
    }

    const handleCheckboxChange = event => {
        
        
        setUserInfoInput({
            ...userInfoInput,
            shareData: event.target.checked
        })
    }

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
            value={userInfoInput.fname}
            onInput={handleInputChange}
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
            value={userInfoInput.lname}
            onInput={handleInputChange}
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
            value={userInfoInput.userName}
            onInput={handleInputChange}
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
            value={userInfoInput.password}
            onInput={handleInputChange}
        />
        <FormControlLabel control={<Checkbox name='shareData'             
            checked={userInfoInput.shareData}
            onChange={handleCheckboxChange}
            />
        } 
            label='Allow others to see my orders' />
        <Button variant='contained' type='submit'>{buttonTerm}</Button>
    </Box>
    );
};

export default SignUpForm;