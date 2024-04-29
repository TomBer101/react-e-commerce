import db from '../utils/firebase';
import {doc, query, collection, getDoc, setDoc} from 'firebase/firestore'


export const registerUser = async (userInfo) => {
    console.log('in register');
    const {firstName, lastName, userName, password, shareData} = userInfo;
    const registerDate = new Date().toLocaleDateString();

    try {
        console.log('user name: ', userName);
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
                console.log('User confirmd - can redirect to user page')
                return({success : true, role : docSnap.data().role});
            
        } else {
            return {success : false, error : 'Wrong Password'}
        }
    } catch (err) {
        console.error("Lofin Faild : ", err);
    }
}