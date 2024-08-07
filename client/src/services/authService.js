import db from '../utils/firebase';
import {doc, query, collection, getDoc, setDoc} from 'firebase/firestore'
import { getUserData } from './usersService';


export const registerUser = async (userInfo) => {
    const {firstName, lastName, userName, password, shareData} = userInfo;
    const registerDate = new Date().toLocaleDateString();

    try {
        const docRef = doc(db, 'users', userName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(`User ${userName} already exists`);
            return {success : false, error: `User ${userName} already exists`}
        } else {
            const generalInfo = {
                name : `${firstName} ${lastName}`,
                userName,
                shareData,
                registerDate,
                role : 'user'
            }

            const privateInfo = {
                userName,
                password,
                role : 'user'
            }

            const generalPromise = setDoc(doc(db, 'users', userName), generalInfo);
            const privatePromise = setDoc(doc(db, 'users-credentials', userName), privateInfo);

            await Promise.all([generalPromise, privatePromise]);
            return { success: true, role : 'user'};
        } 

        } catch (err) {
            console.error('Registration failed:', err);
            
    }
}


export const loginUser = async (userName, password) => {
    try {
        const docRef = doc(db, 'users-credentials', userName);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
            return { success: false, error: `User with the name ${userName} does not exist! Plaese register first.` }; 
        } else if (password === docSnap.data().password) {
            
                console.log(docSnap.data());
                let shareData;
                if (docSnap.data().role === 'user') {
                    const user = await getUserData(userName)
                    shareData = user.shareData
                }
                console.log(shareData);
                return({success : true, role : docSnap.data().role, shareData: shareData});
            
        } else {
            return {success : false, error : 'Wrong Password'}
        }
    } catch (err) {
        console.error("Lofin Faild : ", err);
    }
}