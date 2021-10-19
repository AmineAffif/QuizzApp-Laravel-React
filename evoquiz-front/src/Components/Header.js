import React from 'react';
import '../style/Header.css'
import {
    Link,
    useHistory
  } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();
    const history = useHistory();

    
    return (
        <div className="header_Wrapper">
            {/* Main Logo */}
            <Link to="/">
                <img src="https://svgshare.com/i/bH8.svg" id="main_logo" alt="EvoQUIZ logo" />
            </Link>

            {/* Login Logout btn */}
            {!isLoading && !user && (
                <button 
                    className="btn btn-light rounded-0 btn-block"
                    onClick={() => loginWithRedirect()}
                >
                    Connexion
                </button>
                
                )
            }
            {!isLoading && user && (
                <div className="nav_btn">
                    <button 
                    className="btn btn-dark rounded-0 btn-block"
                    onClick={() => history.push("/dashboard")}
                    >
                        Mon profil
                    </button>

                    <button 
                    className="btn btn-link text-dark rounded-0 btn-block text-decoration-none"
                    id="logout_btn"
                    onClick={() => logout()}
                    >
                        Déconnexion
                    </button>
                
                </div>
                
                )
            }
        </div>
    );
};

export default Header;