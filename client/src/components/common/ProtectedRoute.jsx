import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function ProtectedRoute({ innerChildren, roleAccess }) {
    const {currentUser} = useAuth();

    if (!currentUser || (roleAccess && roleAccess !== currentUser.role)) {
        return <Navigate to='/login' />
    }  

    return innerChildren;
}

export default ProtectedRoute;