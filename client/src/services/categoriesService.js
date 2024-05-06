import db from '../utils/firebase';
 import {doc, query, onSnapshot, collection} from 'firebase/firestore';

import { fetchCategoriesSuccess } from "../redux/actions/admin/categoriesAction";
import { addDocument, getAll } from "../utils/data"

// export const getAll = async () => {
//     console.log('getting all categories');

//     const q = query(collection(db, 'categories'));
//     onSnapshot(q, querySnapshot =>  {console.log(querySnapshot.docs); ;return (querySnapshot.docs)});
    
// }

export const getAllCategories = (dispatch) => {
    //return getAll('categories', callback);
    console.log('Listening for changes in categories collection');
    
    //const unsubscribe = getAll('purchases', (data) => dispatch(fetchPurchasesSuccess(data)))
    //return unsubscribe;

    const q = query(collection(db, 'categories'));
    onSnapshot(q, querySnapshot => {
        const purchases = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })

        dispatch(fetchCategoriesSuccess(purchases));
    })
}

export const addCategory = async (callback, data) => {
    await addDocument('categories', data, callback);
} 