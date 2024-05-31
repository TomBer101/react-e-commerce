import {query, onSnapshot, collection, updateDoc, doc, setDoc, addDoc} from 'firebase/firestore'

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

export const addProduct = async (productData) => {
    const categoryRef = doc(db, 'categories', productData.category)

    const productRef = await addDoc(collection(db, 'products'), {
        ...productData,
        category : categoryRef
    });
    console.log("Document written with ID: ", productRef.id);
}

