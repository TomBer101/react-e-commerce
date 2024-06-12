import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';

import { useAuth } from '../../contexts/AuthContext';
import { getUserData } from '../../services/usersService';
import SignUpForm from '../../components/forms/SignUpForm';

const AccountPage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const {currentUser} = useAuth();

    useEffect(() => {
        const fetchUserInfo = async userId => {
            const user = await getUserData(currentUser.userName);
            console.log('User result: ', user);
            setUserInfo(user);
        }

        if (currentUser) {
            fetchUserInfo(currentUser.userName)
        }

    }, [currentUser])

    const saveUserUpdate = async () => {

    }

    return (
        <Box sx={{backgroundColor : '#e0e0e0', margin : '0', width : '33%', padding : '2%', minWidth : '190px'}}>
            <SignUpForm 
                buttonTerm={'Save!'} 
                userInfo={userInfo}
                handleSubmit={saveUserUpdate}
                />
        </Box>
    );
};

export default AccountPage;