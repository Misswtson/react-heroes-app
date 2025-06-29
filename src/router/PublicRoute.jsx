import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/components/hooks/pages/context/AuthContext';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    return (!logged)
        ? children
        : <Navigate to="/marvel" />
    }
    PublicRoute.propTypes = {
        children: PropTypes.node.isRequired,
      };