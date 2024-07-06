//PRODUCTS ACTIONS
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

// PURCHASE ACTIONS
export const PURCHASE_REQUEST = 'PURCHASE_REQUEST'
export const PURCHASE_SUCCESS = 'PURCHASE_SUCCESS'
export const PURCHASE_FAILURE = 'PURCHASE_FAILURE'

export const purchaseRequest = (data) => ({
    type: PURCHASE_REQUEST,
    payload: data,
});
  
export const purchaseSuccess = (response) => ({
    type: PURCHASE_SUCCESS,
    payload: response,
});
  
export const purchaseFailure = (error) => ({
    type: PURCHASE_FAILURE,
    payload: error,
});
  

export const addProduct = (productId, productPrice, productTitle) => ({
    type: ADD_PRODUCT,
    payload: {productId, productPrice, productTitle}
})

export const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    payload: productId
})

export const deleteProduct = productId => ({
    type: DELETE_PRODUCT,
    payload: productId
})

export const submitOrder = () => ({
    type: SUBMIT_ORDER,
})