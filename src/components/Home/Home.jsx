// Page d'accueil de l'URL
import React, { useState, useEffect } from "react";
import { loadProfil } from "../../actions/user";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import API from "../../api";
// import store from "../../store/store";
import { saveAuthToken } from "../../actions/user";
import { useSpring, animated } from "react-spring";

// Import de Semantic-UI et style
import { Card } from "semantic-ui-react";

import "./Home.scss";

const advertising = [
  {
    id: 1,
    image: "/images/croquetteland.webp",
    link: "https://www.croquetteland.com/",
    header: "CroquetteLand",
    meta: "Boutique en ligne ",
    description:
      "Chez Croquetteland, trouvez tout pour vos animaux de compagnie",
  },
  {
    id: 2,
    image: "/images/spa.png",
    link: "https://www.la-spa.fr/missions/",
    header: "SPA",
    meta: "Refuge pour animaux",
    description:
      "La SPA intervient en France pour le bien-être, la défense et la protection des animaux. Elle agit sur plusieurs missions essentielles grâce à un vaste réseau sur le territoire national. ",
  },
  {
    id: 3,
    image: "/images/animalin.jpg",
    link: "https://www.amimalin.com/",
    header: "CroquetteLand",
    meta: "Dog-sitter",
    description:
      "La meilleure solution pour faire garder vos animaux avec un réseau de plus de 100 000 petsitters partout en France",
  },
];

function Home() {
  const profil = useSelector((state) => state.user.profil);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("nick.rock@gmail.com");
  const [password, setPassword] = useState("test");

  useEffect(() => {
    if (profil.role === "V") {
      navigate("/veterinary");
    }
    if (profil.role === "O") {
      navigate("/account");
    }

    // navigate(`${profil.role === "V" ? "/veterinary" : "/account"}`);
  }, [profil]);

  function handleSubmit(e) {
    e.preventDefault();
    // const email = e.target[0].value;
    // adresse mail : test@machin.fr
    // MDP : test

    // const password = e.target[1].value;
    API.auth.signin(email, password).then((response) => {
      // et on stock la réponse renvoyée
      const { token } = response.data;
      dispatch(saveAuthToken(token));
      dispatch(loadProfil());
    });
  }

  const step = useSpring({
    from: { translateY: -500, scale: 8, opacity: 1 },
    to: { translateY: 0, scale: 1, top: 100, opacity: 0.7 },
    config: { mass: 1, tension: 150, friction: 26 },
  });

  return (
    <div className="home">
      {/* // description de l'application       */}
      <h2 className="home-title">
        Dogtolib, Une solution de suivi simplifiée pour la santé de votre animal
        de compagnie
      </h2>
      {/* <p className="description">
        {" "}
        Application de gestion d'animaux de compagnie
      </p> */}
      <section className="signin-form-container">
        <animated.img
          id="animated"
          src="/images/patte.png"
          alt="Tombée du ciel"
          style={step}
        />
        {/* // formulaire de connexion */}
        <form className="signin-form" onSubmit={handleSubmit}>
          <label className="label">
            Adresse mail
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Adresse mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label className="label">
            Mot de passe
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>

          <button className="button button-subscribe" type="submit">
            Se connecter
          </button>
        </form>
      </section>
      <Link to="/register">
        <button className="button button-subscribe" type="button">
          Pas encore inscrit ?
        </button>
      </Link>
      {/* // publicité */}

      <hr />
      <h3 className="partner-title">Nos partenaires</h3>
      <div className="advertising-container">
        {advertising.map((item, i) => (
          <div
            id="card" key={item.id}>
            <img className="card-img" src={item.image} alt={item.image} />
            <h4>{item.header}</h4>
            <Link className="linkCard" src={item.link} key={`link-card--${i}`}>
              <h5 className="tag">{item.meta}</h5>
            </Link>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
