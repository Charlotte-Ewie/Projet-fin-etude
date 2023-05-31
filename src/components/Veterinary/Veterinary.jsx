// Page de compte de véterinaire
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../actions/user";
import API from "../../api";

// Components partials
import NavBar from "../partials/NavBar/NavBar";
import Reminders from "../Reminders/Reminders";

// Styles
import "./Veterinary.scss";

function Veterinary() {
  // Définition des labels pour chaque champ
  const labelName = {
    email: "Adresse email",
    firstname: "Prénom",
    lastname: "Nom",
    phone_number: "Numéro de téléphone",
    address: "Adresse",
    zip_code: "Code postal",
    city: "Ville",
    opening_hour: "Heure d'ouverture",
    closing_hour: "Heure de fermeture",
    payment_modes: "Moyens de paiement",
  };

  const dispatch = useDispatch();

  // Je récupère les infos du profil
  const { profil, token } = useSelector((state) => state.user);
  const [focusedInput, setFocusedInput] = useState(null);
  console.log(profil);

  const inputRefs = useRef([]);

  // fonction de mise à jour du store au changement de valeurs des inputs
  const handleChange = (identifier, newValue) =>
    dispatch(updateField(identifier, newValue));

  // fonction pour rendre le focus à l'input que l'on souhaite modifier
  function handleClickForFocus(index) {
    inputRefs.current[index].readOnly = false;
    inputRefs.current[index].focus();
    setFocusedInput(index);
  }

  // fonction pour rendre l'input en lecture seule
  function handleValidate(index) {
    inputRefs.current[index].readOnly = true;
    setFocusedInput(null);
    API.update.accountEdit(
      token,
      inputRefs.current[index].name,
      inputRefs.current[index].value
    );
  }

  // fonction pour rendre l'input en lecture seule en appuyant sur entrée
  function handleKeyDown(e, index) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleValidate(index);
    }
  }

  return (
    <div className="component-container">
      <NavBar />
      <div className="veterinary">
        <Reminders />
        <section className="profil">
          <h2>Modifier votre profil</h2>
          <div className="profil-inputs">
            {Object.keys(profil)
              .filter(
                (prop) =>
                  prop !== "id" &&
                  prop !== "veterinary_id" &&
                  prop !== "role" &&
                  prop !== "isOpen"
              )
              .map((prop, index) => (
                <div key={prop} className="input-container">
                  <label
                    htmlFor={`input-${prop.toLowerCase().replace(" ", "-")}`}
                    className="label"
                    key={`input-${prop.toLowerCase().replace(" ", "-")}`}
                  >
                    {labelName[prop]}
                    <input
                      id={`input-${prop.toLowerCase().replace(" ", "-")}`}
                      className="input"
                      type="text"
                      name={prop}
                      defaultValue={profil[prop]}
                      readOnly
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => {
                        handleChange(prop, e.target.value);
                      }}
                      // validation du changement de l'input à la sortie du focus (ici hors du champs)
                      onBlur={() => handleValidate(index)}
                      // validation du changement de l'input à l'appui sur entrée
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  </label>
                  {focusedInput !== index && (
                    <img
                      src="../../../public/icons/write.png"
                      alt="write icon"
                      onClick={() => handleClickForFocus(index)}
                    />
                  )}
                  {focusedInput === index && (
                    <img
                      src="../../../public/icons/validate.png"
                      alt="write icon"
                    />
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Veterinary;
