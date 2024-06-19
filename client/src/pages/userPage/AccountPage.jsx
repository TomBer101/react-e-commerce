import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';

import { useAuth } from '../../contexts/AuthContext';
import { getUserData, updateUser } from '../../services/usersService';
import SignUpForm from '../../components/forms/SignUpForm';
import { useSelector } from 'react-redux';
import { changePurchasesVisibility } from '../../services/purchasesService';

const AccountPage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const {currentUser} = useAuth();
    const purchases = useSelector(this.state.purchases)

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user = await getUserData(currentUser.userName);
            console.log('User result: ', user);
            setUserInfo(user);
        }

        if (currentUser) {
            fetchUserInfo()
        }

    }, [currentUser])

    // const myPurchases = React.useMemo(() => {
    //     if (!user || !purchases) return []; // Handle potential undefined states
    //     return purchases.filter((purchase) => purchase.userId === user.id);
    //   }, [user.userName, purchases.length]);

    const saveUserUpdate = async (updatedUser) => {
        try {
            //update user purchases if needed
            if (updatedUser.shareData !== userInfo.shareData) {
                await changePurchasesVisibility(currentUser.userName, updateUser.shareData, purchases)
            }
            // update user info if needed -> travers the properties -> if there is at least one diffrence => update firestore
            await updateUser(updatedUser)
        } catch (err) {
            alert('Error updating your data')
        }

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