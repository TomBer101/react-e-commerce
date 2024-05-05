import db from "../utils/firebase"
import {  fetchPurchasesSuccess } from "../redux/actions/purchaseAction";
import { getAll } from "../utils/data";


export const getAllPurchases = (dispatch) => {
    console.log('Listening for changes in purchases collection');
    


    const unsubscribe = getAll('purchases', (data) => dispatch(fetchPurchasesSuccess(data)))

    return unsubscribe;
}