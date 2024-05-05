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

    return unsubscribe;
}