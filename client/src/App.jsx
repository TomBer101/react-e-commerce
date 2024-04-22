import {Routes, Route} from 'react-router-dom';

import './App.css'
import { SignUpPage, AdminLaout, LoginPage, UserLaout } from './pages'
//import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
    <Routes>
      <Route index  path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route path='/admin' element={<AdminLaout />} />
      <Route path='/user' element={<UserLaout />} />
    </Routes>


    </>
  )
}

export default App
