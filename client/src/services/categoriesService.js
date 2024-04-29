// import db from '../utils/firebase';
// import {doc, query, onSnapshot, collection} from 'firebase/firestore';

import { addDocument, getAll } from "../utils/data"

// export const getAll = async () => {
//     console.log('getting all categories');

//     const q = query(collection(db, 'categories'));
//     onSnapshot(q, querySnapshot =>  {console.log(querySnapshot.docs); ;return (querySnapshot.docs)});
    
// }

export const getAllCategories = (callback) => {
    return getAll('categories', callback);
}

export const addCategory = async (callback, data) => {
    await addDocument('categories', data, callback);
} 