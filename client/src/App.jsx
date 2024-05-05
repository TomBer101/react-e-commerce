import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './App.css'
import { SignUpPage, AdminLaout, LoginPage, UserLaout } from './pages'
import Categories from './pages/adminPage/Categories';
import Customers from './pages/adminPage/Customers';
import ProtectedRoute from './components/common/ProtectedRoute';
import Products from './pages/adminPage/Products';
import Statistics from './pages/adminPage/Statistics';

function App() {

  return (
    <>
    <Provider store={store}>

    <Routes>
      <Route index  path='/' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route path='/admin' element={<ProtectedRoute allowedRole='admin' component={AdminLaout}/>}>
        <Route path='categories' element={<Categories />} />
        <Route path='customers' element={<Customers />} />
        <Route path='products' element={<Products />} />
        <Route path='statistics' element={<Statistics />} />
      </Route>
      <Route path='/user' element={<ProtectedRoute allowedRole='user' component={UserLaout} />} />
      <Route path='*' element={<h1>Does Not Exists</h1>} />
    </Routes>
    </Provider>


    </>
  )
}

export default App
