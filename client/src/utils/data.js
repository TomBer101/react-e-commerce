// api.js
import axios from 'axios';
import { onSnapshot, query, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import db from './firebase';

const API_BASE_URL = 'https://example.com/api';

export async function fetchData(endpoint) {
  const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
  return response.data;
}

export async function postData(endpoint, data) {
  const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
  return response.data;
}

export const getAll =  (collectionName, callback) => {
  console.log(`getting all ${collectionName}`);

  const q = query(collection(db, collectionName));
  return onSnapshot(q, querySnapShot => {
    const data = querySnapShot.docs.map(doc => {
      return {
        id : doc.id,
        ...doc.data()
      }
    })

    callback(data);
  })
}

// export const getAll = async (collectionName) => {
//   const q = query(collection(db, collectionName));
//   const querySnapshot = await getDocs(q);
  
//   return querySnapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data()
//   }));
// };

export const addDocument = async (collectionName,data, callback) => {
  const docRef = doc(db, collectionName, data.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(`${collectionName} collection already has ${data} within.`);
    callback( {success : false, error : 'Entity already exists'});
  } else {
    await setDoc(doc(db, collectionName, data.id), data);
    callback ({success : true, message : `${data} added to ${collectionName}`})
  }
}

// Other API functions as needed
