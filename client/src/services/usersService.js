import { onSnapshot, collection, query, where, updateDoc } from "firebase/firestore"
import db from "../utils/firebase"
import { fetchUsersRequest, fetchUsersSuccess } from "../redux/actions/admin/userAction";
import { getDocument } from "../utils/data";


export const getAllCustomers = (dispatch) => {
    console.log('Listening for changes in customers/users collection');
    dispatch(fetchUsersRequest());

    const customersRef = collection(db, 'users');
    const filteredQuery = query(customersRef, where('role', '==', 'user'));

    const unsubscribe = onSnapshot(filteredQuery, querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
            id : doc.id,
            ...doc.data()
        }));
        dispatch(fetchUsersSuccess(data));
    });

    
}

export const combineUserData = (users, purchases, products) => {
    // Combine user data with their purchases
    const combinedData = users.map(user => {
        const userPurchases = purchases.filter(purchase => purchase.userId === user.id);
        const userProducts = userPurchases.map(purchase => {
            const product = products.find(product => product.id === purchase.productId);
            return { quantity : purchase.quantity, date : purchase.date,  name: product ? product.title : 'Unknown' };
        });
        return { userName : user.userName, registerDate : user.registerDate, purchases: userProducts };
    });
    console.log(combinedData);
    return combinedData;
};

export const getUserData = async (userId) => {
    try {
        const user = await getDocument("users", userId);
        return user;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const updateUser = async (updatedUser) => {
    try {
        const userRef = doc(db, 'users', updatedUser.userName);
        await updateDoc(userRef, updatedUser);
    } catch (err) {
        console.error('Error updating user: ', err);
    }

}

