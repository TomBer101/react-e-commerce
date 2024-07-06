import db from '../utils/firebase';
 import {doc, query, onSnapshot, collection, getDoc, updateDoc, deleteDoc} from 'firebase/firestore';

import { fetchCategoriesSuccess } from "../redux/actions/admin/categoriesAction";
import { addDocument, getAll } from "../utils/data"

export const updateCategory = async (categoryId, name) => {
    const updatedCategory = doc(db, 'categories', categoryId);
    try {
        await updateDoc(updatedCategory, {
            name: name,
            id: categoryId
        });
    } catch (err) {
        console.error('Error updating category: ', err);
        throw new Error;
    }
}

export const getAllCategories = (dispatch=undefined) => {
    //return getAll('categories', callback);
    console.log('Listening for changes in categories collection');
    
    const q = query(collection(db, 'categories'));
    onSnapshot(q, querySnapshot => {
        const categories = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        dispatch? dispatch(fetchCategoriesSuccess(categories)) : null;
    })
}

export const addCategory = async (callback, data) => {
    await addDocument('categories', data, callback);
} 

export const getCategoryDoc = async (categoryRef) => {
    const categoryDocSnap = await getDoc(categoryRef);
    if (categoryDocSnap.exists) {
      const categoryData = categoryDocSnap.data();
      return {...categoryData, id : categoryDocSnap.id}; // Assuming the category document has a "name" field
    } else {
      console.error("Category document not found");
      return null;
    }
};

export const removeCategory = async (categortId) => {
    try {
        await deleteDoc(doc(db, 'categories', categortId))
    } catch (err) {
        console.error('Error deleteing category: ', err)
        throw new Error
    }
}