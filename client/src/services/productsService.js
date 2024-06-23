import {query, onSnapshot, collection, updateDoc, doc,getDoc, setDoc, addDoc} from 'firebase/firestore'

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


// export const getAllProducts = (dispatch) => {
//     console.log('Listening for changes in products collection');
  
//     const q = query(collection(db, 'products'));
//     onSnapshot(q, (querySnapshot) => {
//       const products = querySnapshot.docs.map((doc) => {
//         const productData = doc.data();
  
//         // Fetch the referenced category document
//         const categoryRef = productData.category; // Assuming 'category' is the reference field name

//         if (categoryRef) {
//           getDoc(categoryRef)
//             .then((categoryDoc) => {
//               if (categoryDoc.exists) {
//                 const categoryId = categoryDoc.id; // Category ID extracted from document ID
//               } else {
//                 const categoryId = null
//               }
//             })
//             .catch((error) => {
//               console.error('Error fetching category:', error);
//               const categoryId = null
//             });
//         } else {
//           console.warn('Product document (', doc.id, ') has no category reference');
//           // Handle products without category reference (e.g., set categoryId to null)
//           const categoryId = null
//         }
  
//         // Alternative approach (if fetching all categories upfront is feasible):
//         // const allCategories = await getDocs(collection(db, 'categories'));
//         // ... (use allCategories to map category IDs to product data)
  
//         return { // This return statement is not actually reached due to asynchronous nature
//           id: doc.id,
//           ...productData,
//         };
//       });
//     });
//   };
  

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

