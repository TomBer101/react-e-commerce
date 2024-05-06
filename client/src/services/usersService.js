import { onSnapshot, collection, query, where } from "firebase/firestore"
import db from "../utils/firebase"
import { fetchUsersRequest, fetchUsersSuccess } from "../redux/actions/admin/userAction";


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
            return { ...purchase, productName: product ? product.title : 'Unknown' };
        });
        return { ...user, purchases: userProducts };
    });
    console.log(combinedData);
    return combinedData;
};