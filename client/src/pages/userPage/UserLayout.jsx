import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { getUserData } from '../../services/usersService';
import NavBar from '../../components/common/NavBar';


const UserLayout = () => {
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