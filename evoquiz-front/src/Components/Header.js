import React, { useEffect, useState } from "react";
import "../style/Header.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import RequestAPI from "../Utils/Api";
import addIconPath from "../Assets/img/addIcon.png";
import closeIconPath from "../Assets/img/crossIcon.svg";
import menuIconPath from "../Assets/img/menuIcon.svg";

const Header = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const history = useHistory();

  const [userRole, setUserRole] = useState();

  useEffect(() => {
    RequestAPI("POST", "getUserRole", {
      user_id: user?.sub,
    })
      .then(function (reponse) {
        setUserRole(reponse.data?.role);
        console.log(reponse.data?.role);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [user]);


  const openNav = () => {
    document.getElementById("overlayNav").style.width = "100vw"
  }
  const closeNav = () => {
    document.getElementById("overlayNav").style.width = "0"
  }


  return (
    <div className="header_Wrapper">
      {/* Main Logo */}
      <Link to="/">
        <img src="/main_logo.svg" id="main_logo" alt="EvoQUIZ logo" />
      </Link>

      {/* Loged in ? */}
      {!isLoading && !user && (
        <button
          className="btn btn-light rounded-0 btn-block"
          onClick={() => loginWithRedirect()}
        >
          Connexion
        </button>
      )}

      {/* User is not Admin */}
      {!isLoading && user && userRole != "admin" && (
        <div className="nav_btn">
          <img src={menuIconPath} id="menuIcon" onClick={openNav} />

          {/* Mobile Pannel */}
          <div className="mobilePannel" id="overlayNav">

            <img src={closeIconPath} id="closeIcon" onClick={closeNav} />

            <div className="buttonsMobileWrapper">
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

          </div>


          <div className="desktop">
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
        </div>
      )}

      {/* User is Admin */}
      {!isLoading && user && userRole == "admin" && (
        <div className="nav_btn">

          <img src={menuIconPath} id="menuIcon" onClick={openNav} />

          {/* Mobile Pannel */}
          <div className="mobilePannel" id="overlayNav">

            <img src={closeIconPath} id="closeIcon" onClick={closeNav} />

            <div className="buttonsMobileWrapper">
              <button
                className="btn btn-dark rounded-0 btn-block"
                onClick={() => history.push("/dashboard")}
              >
                Mon profil
              </button>

              <button
                className="btn rounded-0 btn-block create_quiz"
                onClick={() => history.push("/createQuiz")}
              >
                <img id="add_icon" src={addIconPath} alt="create a quiz" />
                Créer un quiz
              </button>

              <button
                className="btn btn-link text-dark rounded-0 btn-block text-decoration-none"
                id="logout_btn"
                onClick={() => logout()}
              >
                Déconnexion
              </button>
            </div>

          </div>

          <div className="desktop">
            <button
              className="btn btn-dark rounded-0 btn-block"
              onClick={() => history.push("/dashboard")}
            >
              Mon profil
            </button>

            <button
              className="btn rounded-0 btn-block create_quiz"
              onClick={() => history.push("/createQuiz")}
            >
              <img id="add_icon" src={addIconPath} alt="create a quiz" />
              Créer un quiz
            </button>

            <button
              className="btn btn-link text-dark rounded-0 btn-block text-decoration-none"
              id="logout_btn"
              onClick={() => logout()}
            >
              Déconnexion
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Header;
