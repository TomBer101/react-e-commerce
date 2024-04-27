import React from 'react';
import { Navigate, Route } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function ProtectedRoute({ component : Component, allowedRole, ...rest }) {
    const {currentUser} = useAuth();

    if (!currentUser || ( allowedRole !== currentUser.role)) {
        return <Navigate to='/' />
    }  

    return (
        <Component />
    )
}

export default ProtectedRoute;