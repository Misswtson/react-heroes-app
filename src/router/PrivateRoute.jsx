import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/components/hooks/pages/context/AuthContext';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children
        : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };