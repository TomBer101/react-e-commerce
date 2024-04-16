import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUpPage } from './pages'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
    <AuthProvider>
    <SignUpPage />
    </AuthProvider>


    </>
  )
}

export default App
