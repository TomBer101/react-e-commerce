import { createStore, combineReducers} from 'redux';

import usersReducer from './reducers/usersReducers';
import purchasesReducer from './reducers/purchasesReducer';
import productsReducer from './reducers/productsReducers';

const rootReducer = combineReducers({
  users: usersReducer,
  purchases : purchasesReducer,
  products : productsReducer
});

const store = createStore(rootReducer);

export default store;
