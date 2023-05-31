// Page de souscription
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import eye from "/public/images/eye.png";
import "./Register.scss";

// Import de Semantic-UI
import { Card } from "semantic-ui-react";

//Import API
import API from "../../api";

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

// Définition des labels pour chaque champs
const labelName = {
  email: "Adresse email",
  firstname: "Prénom",
  lastname: "Nom",
  phone_number: "Numéro de téléphone",
  address: "Adresse",
  zip_code: "Code postal",
  city: "Ville",
  password: "Mot de passe",
  repeat_password: "Confirmer le mot de passe",
};

function changer(classN) {
  var x = document.getElementById(classN);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Register() {
  // J'initialise le state de mon register
  const [register, setRegister] = useState("");
  const [radioData, setRadioData] = useState("");
  const navigate = useNavigate();
  // Récupérez les valeurs des champs du formulaire
  const formData = {};
  Object.keys(labelName).forEach((prop) => {
    formData[prop] = register[prop];
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  }

  function handleChangeRadio(e) {
    const { name, value } = e.target;
    setRadioData({ [name]: value });
  }

  const mergeData = { ...formData, ...radioData };

  function handleSubmit(e) {
    e.preventDefault();
    API.register
      .newUser(mergeData)
      .then((response) => {
        navigate("/register/registration");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="register">
      {/* // description de l'application       */}
      <h2>Veuillez vous inscrire</h2>
      <p className="register-description">
        Merci de votre confiance, remplissez les champs suivants pour commencer
        votre aventure par-minous
      </p>

      {/* // formulaire de connexion */}
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="profil-inputs">
          {Object.keys(labelName)
            .filter((prop) => prop !== "role") // Exclure le champ "role"
            .map((prop, i) => {
              let val;

              if (prop === "password" || prop === "repeat_password") {
                val = (
                  <div key={`form--${i}`} className="input-container">
                    <label
                      htmlFor={`input-${prop.toLowerCase().replace(" ", "-")}`}
                      className="label"
                      key={`input-${prop.toLowerCase().replace(" ", "-")}`}
                    >
                      {labelName[prop]}
                      <img
                        src={eye}
                        id="eye"
                        onClick={() =>
                          changer(
                            `input-${prop.toLowerCase().replace(" ", "-")}`
                          )
                        }
                      />
                      <input
                        id={`input-${prop.toLowerCase().replace(" ", "-")}`}
                        className="input-register"
                        type="password"
                        placeholder={labelName[prop]}
                        name={prop}
                        value={register[prop]}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                );
              } else {
                val = (
                  <div key={`form--${i}`} className="input-container">
                    <label
                      htmlFor={`input-${prop.toLowerCase().replace(" ", "-")}`}
                      className="label"
                      key={`input-${prop.toLowerCase().replace(" ", "-")}`}
                    >
                      {labelName[prop]}
                      <input
                        id={`input-${prop.toLowerCase().replace(" ", "-")}`}
                        className="input-register"
                        type="text"
                        placeholder={labelName[prop]}
                        name={prop}
                        value={register[prop]}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                );
              }
              return val;
            })}
        </div>
        <aside className="register-span">
          Votre mot de passe doit contenir huit caractères minimum, un chiffre,
          une lettre majuscule minimum et un caractère spécial
        </aside>

        <fieldset className="register-fieldset">
          <legend>Vous êtes ? </legend>

          <div className="register-radio">
            <input
              className="register-radio-input"
              type="radio"
              name="role"
              id="owner"
              value="O"
              onChange={handleChangeRadio}
            />
            <label htmlFor="user" className="register-radio-label">
              Particulier
            </label>

            <input
              className="register-radio-input"
              type="radio"
              name="role"
              id="veterinary"
              value="V"
              onChange={handleChangeRadio}
            />
            <label htmlFor="veterinary" className="register-radio-label">
              Vétérinaire
            </label>
          </div>
        </fieldset>
        <div>
          <button className="button button-subscribe" type="submit">
            S'inscrire
          </button>
        </div>
      </form>

      {/* // publicité */}

      <hr />

      <div>
        <button
          className="button button-subscribe"
          type="button"
          onClick={() => navigate("/")}
        >
          Retour à la page de connexion
        </button>
      </div>

      <hr />
      <h3 className="partner-title">Nos partenaires</h3>
      <div className="advertising-container">
        {advertising.map((item, i) => (
          <div id="card" key={item.id}>
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

export default Register;
