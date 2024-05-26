import {query, onSnapshot, collection, updateDoc, doc} from 'firebase/firestore'

import db from "../utils/firebase"
import {  FETCH_PRODUCTS_SUCCESS, fetchProductsSuccess } from "../redux/actions/productsAction";
import { getAll } from "../utils/data";


export const getAllProducts = (dispatch) => {
    console.log('Listening for changes in products collection');
    
    //const unsubscribe = getAll('products', (data) => dispatch(fetchProductsSuccess(data)))
    //return unsubscribe;

    const q = query(collection(db, 'products'));
    onSnapshot(q, querySnapshot => {
        const products = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        dispatch(fetchProductsSuccess(products))
    })
}

export const updateProduct = async (productId, modifiedProduct) => {
    const updatedProductRef = doc(db, 'products', productId);
    const categoryRef = doc(db, 'categories', modifiedProduct.category);

    await updateDoc(updatedProductRef, {
        ...modifiedProduct,
        category : categoryRef
    })
}

// export const combineProductData = (users, purchases, products) => {
//     const combinedData = products.map(product => {
//         const productPurchases = purchases.filter(purchase => purchase.productId === product.id);
//         const producCustomers = productPurchases.map(purchase => {
//             const customer = users.find(user => user.iserId === purchase.userId);
//             return {
//                 userName : customer.name,
//                 quantity : purchase.quantity,
//                 date : purchase.date
//             }
//         });
//         return {}
//     })
// }