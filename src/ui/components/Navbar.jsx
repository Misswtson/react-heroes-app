import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/components/hooks/pages/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    console.log(user);

    // useContext(AuthContext) is used to access the AuthContext, which provides authentication-related data and functions.
    // useNavigate() is a hook from react-router-dom that allows navigation programmatically.
    // logout() is a function that logs out the user, typically clearing authentication tokens or user data.
    // navigate('/login', { replace: true }) redirects the user to the login page after logging out, replacing the current entry in the history stack.
    // This means that when the user clicks the logout button, they will be redirected to the login page without being able to go back to the previous page using the browser's back button.
    

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        { user?.name }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}