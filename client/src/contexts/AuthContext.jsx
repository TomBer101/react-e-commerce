import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser, registerUser } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useLocalStorage('ecommerce-user', null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const signup = async ({firstName, lastName, userName, password, shareData}) => {

        try {
        console.log('signing up?');

            setLoading(true);
            console.log('user name: ', userName, 'flname: ', firstName, lastName);
            const res = await registerUser({ firstName, lastName, userName, password, shareData });
            console.log('res: ', res);
            if (res.success) {
                setCurrentUser({ userName, role : res.role });
                navigate('/user');
            } else {
                setError('User name is taken.');
            }
        } catch (err) {
            console.log(err);
            setError('Registration failed - Internal Error');
        } finally {
            setLoading(false);
        }
    }

    const login = async({userName, password}) => {
        try {
            setLoading(true);
            const res = await loginUser(userName, password);
            if (res.success) {
                setCurrentUser({ userName, role : res.role });
                navigate(`/${res.role}`);
            } else {
                setError('Login failed');
            }
        } catch (err) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setCurrentUser(null);
        navigate('/login');
    }

    const value = useMemo( () => ({
        currentUser, 
        error, 
        loading, 
        onSignup : signup, 
        onLogin : login, 
        onLogOut : logout
    }), [currentUser]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}