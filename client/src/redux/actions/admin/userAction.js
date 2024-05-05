// userActions.js
//import { getUsers } from '../services/userService';

import { getAllCustomers } from "../../../services/usersService";

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsersRequest = () => ({
    type : FETCH_USERS_REQUEST
})

export const fetchUsersData = () => async (dispatch) => {
    try {
      const unsubscribe = getAllCustomers((data) => {
        dispatch(fetchUsersSuccess(data));
      });
  
      // Clean up by unsubscribing from Firestore listener when component unmounts
      return () => unsubscribe();
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
