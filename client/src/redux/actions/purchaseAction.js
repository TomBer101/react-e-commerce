// userActions.js
//import { getUsers } from '../services/userService';


export const FETCH_PURCHASES_SUCCESS = 'FETCH_PURCHASES_SUCCESS';
export const FETCH_PURCHASES_FAILURE = 'FETCH_PURCHASES_FAILURE';

export const fetchPurchasesSuccess = (purchases) => ({
  type: FETCH_PURCHASES_SUCCESS,
  payload: purchases,
});

export const fetchPurchasesFailure = (error) => ({
  type: FETCH_PURCHASES_FAILURE,
  payload: error,
});


