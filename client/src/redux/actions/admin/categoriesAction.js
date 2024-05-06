// userActions.js
//import { getUsers } from '../services/userService';


export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const ADD_CATEGORY = 'ADD_CATEGORY'

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const addCategory = (category) => ({
    TYPE: ADD_CATEGORY,
    payload: category
})


