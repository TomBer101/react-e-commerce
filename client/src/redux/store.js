import { createStore, combineReducers} from 'redux';

import usersReducer from './reducers/usersReducers';
import purchasesReducer from './reducers/purchasesReducer';
import productsReducer from './reducers/productsReducers';
import categporiesReducer from './reducers/categoriesReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  purchases : purchasesReducer,
  products : productsReducer,
  categories: categporiesReducer,
});

const store = createStore(rootReducer);

export default store;
