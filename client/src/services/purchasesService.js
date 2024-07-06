import db from "../utils/firebase"
import { collection, doc, onSnapshot, or, query, where, writeBatch, Timestamp } from "firebase/firestore";

import {  fetchPurchasesSuccess } from "../redux/actions/purchaseAction";


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

export const submitPurchase = async (userId, isVisible, cart) => {
    try {
        const timeStamp = Timestamp.now();
        //const timeStamp = Date();
        const batch = writeBatch(db);
        console.log(cart);


        cart.forEach(cartItem => {
            const purchaseRef = doc(collection(db, 'purchases'));
            batch.set(purchaseRef, {
                price: cartItem.price,
                quantity: cartItem.quantity,
                productId: cartItem.productId,
                isVisible,
                date: timeStamp,
                userId
            });
        });

        await batch.commit()
    } catch (err) {
        console.error('Error ourchase products: ', err);
        throw new Error('Couldnt purchaes prpodeuct...')
    }

}

/*
date, id, isvisible, price productid, quantity,userid
*/