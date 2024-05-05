import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../actions/productsAction';

const initialState = {
    products : [],
    error : null,
    loading : false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products : action.payload
            };
        default:
            return state
    }
}

export default productsReducer;