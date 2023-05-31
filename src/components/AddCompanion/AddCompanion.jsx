// Page de création d'un nouveau compagnon
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// Styles
import "./AddCompanion.scss";

// Components partials
import NavBar from "../partials/NavBar/NavBar";
import Reminders from "../Reminders/Reminders";

//Import API
import API from "../../api";

function AddCompanion() {
  const navigate = useNavigate();

  // J'initialise le state de mon ajout de compagnon
  const { token } = useSelector((state) => state.user);
  const [companionName, setCompanionName] = useState("");
  const [companionBirthdate, setCompanionBirthdate] = useState("");
  const [companionSpecie, setCompanionSpecie] = useState("");
  const [companionBreed, setCompanionBreed] = useState("");

  function handleChangeName(e) {
    const { name, value } = e.target;
    setCompanionName({ ...companionName, [name]: value });
  }
  function handleChangeBirthdate(e) {
    const { name, value } = e.target;
    setCompanionBirthdate({ ...companionBirthdate, [name]: value });
  }
  function handleChangeSpecie(e) {
    const { name, value } = e.target;
    setCompanionSpecie({ ...companionSpecie, [name]: value });
  }
  function handleChangeBreed(e) {
    const { name, value } = e.target;
    setCompanionBreed({ ...companionBreed, [name]: value });
  }

  const companionData = {
    ...companionName,
    ...companionBirthdate,
    ...companionSpecie,
    ...companionBreed,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("TODO");
    API.addCompanion.addCompanion(token, companionData).then(() => {
      navigate("/account");
    });
  }

  return (
    <div className="component-container">
      <NavBar />
      <div className="add-companion-container">
        <section className="add-companion">
          <div className="add-companion-inputs">
            <h2>Ajouter un nouveau compagnon</h2>
            {/* // formulaire d'ajout d'animal */}
            <form className="form-add-companion" onSubmit={handleSubmit}>
              <label className="label">Nom</label>
              <input
                className="input"
                name="name"
                placeholder=" Nom de votre compagnon"
                type="text"
                onChange={handleChangeName}
              />
              <label className="label">Date de naissance</label>
              <input
                className="input"
                name="birthdate"
                type="date"
                onChange={handleChangeBirthdate}
              />
              <label className="label">Type d'animal</label>
              <select
                className="input"
                name="specie"
                onChange={handleChangeSpecie}
              >
                <option value="">--Choisissez le type de compagnon</option>
                <option value="chien">Chien</option>
                <option value="chat">Chat</option>
                <option value="autre">Autres</option>
              </select>

              <label className="label">Race de votre compagnon</label>
              <input
                className="input"
                name="breed"
                type="text"
                onChange={handleChangeBreed}
              />
              <div>
                <button className="button button-subscribe" type="submit">
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddCompanion;
