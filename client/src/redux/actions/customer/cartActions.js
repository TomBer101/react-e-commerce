export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

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