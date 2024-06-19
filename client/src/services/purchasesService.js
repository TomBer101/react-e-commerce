import db from "../utils/firebase"
import {  fetchPurchasesSuccess } from "../redux/actions/purchaseAction";
import { getAll } from "../utils/data";
import { collection, getDocs, onSnapshot, or, query, where, writeBatch } from "firebase/firestore";


export const getAllPurchases = (dispatch, userId = undefined) => {
    console.log('Listening for changes in purchases collection');
    
    //const unsubscribe = getAll('purchases', (data) => dispatch(fetchPurchasesSuccess(data)))
    //return unsubscribe;
    const purchasesRef = collection(db, 'purchases');
    const q = userId? 
        query(purchasesRef,
            or(where('isVisible', '==', true),
                where('userId', '==', userId))) 
        :query(purchasesRef);

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

export const changePurchasesVisibility = async (userId, isVisible, purchases) => {
    try {
        const batch = writeBatch(db);

        purchases.forEach(purchase => {
            if (purchase.userId === userId) {
                const purchaseRef = doc(db, 'purchases', purchase.id);
                batch.update(purchase, {isVisible});
            }
        });

        await batch.commit()
        console.log('Purchases visibility changed successfully.');
    } catch (err) {
        console.error('Error updating purchases visibility: ', err);
        throw new Error()
    }
}