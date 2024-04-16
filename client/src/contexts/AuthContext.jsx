import React, { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '../services/authService';

const AuthContext = createContext();


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const signup = async ({fname, lname, userName, password, shareData}) => {

        try {
        console.log('signing up?');

            setLoading(true);
            console.log('user name....: ', userName);
            const res = await registerUser({ fname, lname, userName, password, shareData });
            console.log('res: ', res);
            if (res.success) {
                setCurrentUser({ userName });
                alert('sucess')
            } else {
                setError('Registration failed');
                alert('fail')

            }
        } catch (err) {
            console.log(err);
            setError('Registration failed');
        } finally {
            setLoading(false);
        }
    }

       const login = async(userName, password) => {
        try {
            setLoading(true);
            const res = await loginUser(userName, password);
            if (res.success) {
                alert('sucess')
                setCurrentUser({ userName });
            } else {
                alert('fail')
                setError('Registration failed');
            }
        } catch (err) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setCurrentUser(null);
    }

    const value = {
        currentUser, signup, login, logout, error, loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}