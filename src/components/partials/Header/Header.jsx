// Barre de navigation présente dans le composant Header
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/actions/user";
import useUser from "@/hooks/useUser";

import "./Header.scss";

function Header() {
  const user = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="app-header">
      <Link to="/">
        {" "}
        <div className="app-header-logo">
        <h1 className="app-header-title">Dogtolib</h1> <img className="app-header-icon" src="/images/patte.png" alt="logo"></img>
        </div>
      </Link>
      <Link className="app-header-nav-a-view" to="/our-team">
        {" "}
        Notre équipe
      </Link>
      {/* // && = Si l'utilisateur est connecté j'affiche le bouton*/}
      <nav className="app-header-nav">
        <a className="app-header-nav-a" href="/">
          <img src="/icons/facebook.png" alt="facebook-icon"></img>
        </a>
        <a className="app-header-nav-a" href="/">
          <img src="/icons/instagram.png" alt="instagram-icon"></img>
        </a>
        <a className="app-header-nav-a" href="/">
          <img src="/icons/twitter.png" alt="twitter-icon"></img>
        </a>
      </nav>
      {user.isLogged() && (
        <button className="header-button" onClick={handleLogout}>
          Déconnexion
        </button>
      )}
    </header>
  );
}

export default Header;
