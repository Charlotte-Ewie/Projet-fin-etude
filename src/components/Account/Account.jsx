// Page de compte
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { loadAnimals } from "../../actions/animal";


// Import des actions
import { loadFavorites, loadProfil } from "../../actions/user";

// Styles
import "./Account.scss";

// Components partials
import NavBar from "../partials/NavBar/NavBar";
import Reminders from "../Reminders/Reminders";
import VeterinaryFavourite from "../VeterinaryFavourite/VeterinaryFavourite";


function Account() {

  const { animals } = useSelector((state) => state.animal);
  const { profil, favorites } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.profil);
  // console.log('token à la connexion: ', token)

  useEffect(() => {
    dispatch(loadProfil());
  }, []);

  useEffect(() => {
    dispatch(loadAnimals());
  }, [profil]);

  // useEffect(() => {
  //   dispatch(loadReminder());
  // }, []);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [profil]);

  const loader = async () => {
    const user = await getUser();
    if (!user) {
      return redirect("/login");
    }
    return null;
  };
  // redirect("/veterinary"); !

  return (
    <div className="component-container">
      <NavBar />
      <div className="account">
        <Reminders />
        <div className="account-content">
          <section className="myCompanions">
            <h2>Mes compagnons 🐕</h2>
            <ul className="companions">
              {animals.map((item, i) => (
                <Link to={`/account/companion/${item.id}`} key={`companion--${i}`}>
                  <li className="companion">
                    {" "}
                    <img className="companion-picture" alt={item.specie}
                      src={`/images/${item.specie}.png`} />
                    <h3 className="companion-name" >
                      {item.name}
                    </h3>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          <VeterinaryFavourite />
        </div>
      </div>
    </div>
  );
}

export default Account;
