export const FETCH_PRODUCTS_SUCCESS = 'FETCH_products_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_products_FAILURE';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});


