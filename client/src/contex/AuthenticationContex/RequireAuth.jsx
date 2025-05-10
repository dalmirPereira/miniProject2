//--------------- Module 7 - Lab Work Ex4 ----------------------

import { Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

export default function RequireAuth({ children }) {

    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? children : <Navigate to="/" />;
}