import {FETCH_PURCHASES_FAILURE, FETCH_PURCHASES_SUCCESS } from '../actions/purchaseAction';

const initialState = {
    purchases : [],
    error : null,
    loading : false
}

const purchasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PURCHASES_SUCCESS:
            return {
                ...state,
                purchases : action.payload
            };
        default:
            return state
    }
}

export default purchasesReducer;