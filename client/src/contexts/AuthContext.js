import React, { createContext, useContext, useState } from 'react';
import {auth} from '../services/firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signup(fname, lname, userName, password) {
        auth.createUserWithNameAndPassword();
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}