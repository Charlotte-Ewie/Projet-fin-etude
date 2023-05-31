// Page de Menu latéral

// Import de React
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { loadAnimals } from "../../../actions/animal";
import { changeNavBar } from "../../../actions/user";

// Import du hook veterinary
import useVeterinary from "@/hooks/useVeterinary";

// Import des icons
import arrow from "/public/icons/arrow-left.svg";
import bell from "/public/icons/bell.png";
import search from "/public/images/search.png";

// Import des images
import userBoy from "/public/images/userBoy.png";
import veterinary from "/public/images/Doc.png";

import "./NavBar.scss";

function NavBar() {
  const { profil } = useSelector((state) => state.user);
  const isOpen = useSelector((state) => state.user.isOpen);

  const veterinary = useVeterinary();

  const dispatch = useDispatch();

  const { animals } = useSelector((state) => state.animal);

  function handleClick() {
    dispatch(changeNavBar(isOpen));
  }

  useEffect(() => {
    dispatch(loadAnimals());
  }, []);

  return (
    <nav className={isOpen ? "NavBar" : "NavBar-close"}>
      <img
        src={arrow}
        alt="arrow"
        className={isOpen ? "arrow" : "arrow-close"}
        defaultValue={isOpen}
        // value={isOpen}
        onClick={handleClick}
      />
      <div className={isOpen ? "NavBar-user" : "NavBar-user-close"}>
        <Link to={veterinary.roleVeterinary() ? "/veterinary" : "/account"}>
          <img
            src={userBoy}
            alt="profil"
            className={
              isOpen ? "NavBar-user-picture" : "NavBar-user-picture-close"
            }
          />
        </Link>
        {isOpen && (
          <div className="NavBar-user-name">
            {profil.firstname} {profil.lastname}
          </div>
        )}
      </div>

      <div className="NavBar-scroller">
        {!veterinary.roleVeterinary() && (
          <>
            <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
              👤 {isOpen && "Gestion de votre profil"}
            </div>
            <div className="NavBar-link">
              <NavLink to="/account/edit">
                <img src={userBoy} alt="logo" className="NavBar-link-logo" />
              </NavLink>
              <NavLink to="/account/edit" className="NavBar-link-text">
                {isOpen && "Modification du profil"}
              </NavLink>
            </div>
          </>
        )}
        {!veterinary.roleVeterinary() && (
          <>
            <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
              🐕 {isOpen && "Gestion de vos compagnons"}
            </div>

            {isOpen && (
              <div className="NavBar-link">
                <NavLink
                  to="/account/companion/new"
                  className="NavBar-link-text"
                >
                  Ajouter un compagnon
                  <span className="NavBar-heading-more">+</span>
                </NavLink>
              </div>
            )}
          </>
        )}

        {animals.map((item) => (
          <div className="NavBar-link" key={item.id}>
            <NavLink to={`/account/companion/${item.id}`}>
              <img
                src={`/images/${item.specie}.png`}
                alt="logo"
                className="NavBar-link-logo"
              />
            </NavLink>
            {isOpen && (
              <NavLink
                to={`/account/companion/${item.id}`}
                className="NavBar-link-text"
              >
                {item.name}
              </NavLink>
            )}
          </div>
        ))}

        <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
          📓{" "}
          {isOpen &&
            !veterinary.roleVeterinary() &&
            "Gestion du carnet de santé"}
          {isOpen && veterinary.roleVeterinary() && "Gestion des rappels"}
        </div>
        {!veterinary.roleVeterinary() && (
          <div className="NavBar-link">
            <NavLink to="/account/search">
              <img src={search} alt="logo" className="NavBar-link-logo" />
            </NavLink>
            <NavLink to="/account/search" className="NavBar-link-text">
              {isOpen && "Rechercher un vétérinaire"}
            </NavLink>
          </div>
        )}
        <div className="NavBar-link">
          <NavLink to="/account/reminders/new">
            <img src={bell} alt="logo" className="NavBar-link-logo" />
          </NavLink>
          <NavLink to="/account/reminders/new" className="NavBar-link-text">
            {isOpen && "Mes rappels"}
          </NavLink>
        </div>

        {/* <div className="NavBar-link">
          <NavLink to="/account/favorite">
            <img src={veterinary} alt="logo" className="NavBar-link-logo" />
          </NavLink>
          <NavLink to="/account/favorite" className="NavBar-link-text">
            {isOpen && "Mon vétérinaire"}
          </NavLink> 
         </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
