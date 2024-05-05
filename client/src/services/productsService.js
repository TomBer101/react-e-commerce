import db from "../utils/firebase"
import {  FETCH_PRODUCTS_SUCCESS, fetchProductsSuccess } from "../redux/actions/productsAction";
import { getAll } from "../utils/data";


export const getAllProducts = (dispatch) => {
    console.log('Listening for changes in products collection');
    


    const unsubscribe = getAll('products', (data) => dispatch(fetchProductsSuccess(data)))

    return unsubscribe;
}