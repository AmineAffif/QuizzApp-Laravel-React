import React from 'react';
import '../style/Header.css'
import {
    Link
  } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();
    return (
        <div className="header_Wrapper">
            {!isLoading && !user && (
                <button 
                    className="btn tbn-primary btn-block"
                    onClick={() => loginWithRedirect()}
                >
                    Connexion
                </button>
                )
            }
            {!isLoading && user && (
                <button 
                    className="btn tbn-primary btn-block"
                    onClick={() => logout()}
                >
                    Déconnexion
                </button>
                )
            }
        </div>
    );
};

export default Header;