import {Routes, Route} from 'react-router-dom';

import './App.css'
import { SignUpPage, AdminLaout, LoginPage, UserLaout } from './pages'
import ProtectedRoute from './components/common/ProtectedRoute';
//import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
    <Routes>
      <Route index  path='/' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route path='/admin' element={
        <ProtectedRoute allowedRole='admin' component={AdminLaout}/>
       } />
      <Route path='/user' element={
        <ProtectedRoute allowedRole='user' component={UserLaout} />
       } />
    </Routes>


    </>
  )
}

export default App
