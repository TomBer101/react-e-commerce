import db from '../utils/firebase';
 import {doc, query, onSnapshot, collection, getDoc} from 'firebase/firestore';

import { fetchCategoriesSuccess } from "../redux/actions/admin/categoriesAction";
import { addDocument, getAll } from "../utils/data"

// export const getAll = async () => {
//     console.log('getting all categories');

//     const q = query(collection(db, 'categories'));
//     onSnapshot(q, querySnapshot =>  {console.log(querySnapshot.docs); ;return (querySnapshot.docs)});
    
// }

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