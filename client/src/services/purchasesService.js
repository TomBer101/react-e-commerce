import db from "../utils/firebase"
import {  fetchPurchasesSuccess } from "../redux/actions/purchaseAction";
import { getAll } from "../utils/data";
import { collection, onSnapshot, query } from "firebase/firestore";


export const getAllPurchases = (dispatch) => {
    console.log('Listening for changes in purchases collection');
    
    //const unsubscribe = getAll('purchases', (data) => dispatch(fetchPurchasesSuccess(data)))
    //return unsubscribe;

    const q = query(collection(db, 'purchases'));
    onSnapshot(q, querySnapshot => {
        const purchases = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })

        dispatch(fetchPurchasesSuccess(purchases));
    })
}