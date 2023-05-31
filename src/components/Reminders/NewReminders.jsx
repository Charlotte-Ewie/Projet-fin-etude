import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAnimals } from "../../actions/animal";
import { useNavigate } from "react-router-dom";

import NavBar from "../partials/NavBar/NavBar";
import API from "../../api";

import "./NewReminders.scss";

function NewReminder() {
  // Interraction du store user afin de récuperer le Token
  const { token, profil } = useSelector((state) => state.user);
  const { animals } = useSelector((state) => state.animal);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Afin de récuperer la liste de mes compagnions je suis obligé de questionner l'API
  useEffect(() => {
    dispatch(loadAnimals());
  }, []);

  // State pour les différents champs du formulaire

  const [resultDate, setResultDate] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formLabel, setFormLabel] = useState("");
  const [resultAnimal, setResultAnimal] = useState("");

  function handleChangeDate(e) {
    const { name, value } = e.target;
    const resultDate = { [name]: value };
    setResultDate(resultDate);
  }

  function handleChangeTitle(e) {
    const { name, value } = e.target;
    const formTitle = { [name]: value };
    setFormTitle(formTitle);
  }

  function handleChangeLabel(e) {
    const { name, value } = e.target;
    const formLabel = { [name]: value };
    setFormLabel(formLabel);
  }

  function handleChangeAnimal(e) {
    const { name, value } = e.target;
    const resultAnimal = { [name]: value };
    setResultAnimal(resultAnimal);
  }

  const resultMerge = {
    ...resultDate,
    ...formTitle,
    ...formLabel,
    ...resultAnimal,
  };

  function handleSubmit(e) {
    e.preventDefault();
    API.reminders
      .newReminder(token, resultMerge)
      .then((response) => {
        navigate("/account");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container-reminder">
      <NavBar />
      {/* // Formulaire principal relatif aux différentes données du forumlaire */}
      <div className="add-reminder">
        <form onSubmit={handleSubmit} className="add-reminder-form">
          <div className="add-reminder-form-container">
            <h2> Créer un nouveau rappel</h2>
            <div className="add-reminder-type">
              <label className="label">
                Jour & heure du rappel
                <input
                  type="datetime-local"
                  name="datetime"
                  onChange={handleChangeDate}
                  className="input add-reminder-form-container-input"
                ></input>
              </label>
            </div>

            {/* // Section concernant le type de rappel */}
            {/* Form pour type de rendez-vous / type de rappel */}
            <label className="label">
              Type de rappels
              <input
                className="input add-reminder-form-container-input"
                name="title"
                onChange={handleChangeTitle}
                placeholder="Type de rappels"
              />
            </label>

            <label className="label">
              Détail du rappel
              <input
                className="input add-reminder-form-container-input"
                name="label"
                placeholder="Detail du rappel"
                onChange={handleChangeLabel}
              />
            </label>

            {profil.role === "O" && (
              <label className="label">
                Choisissez un animal :
                <div className="select-container">
                  <select
                    name="animal_id"
                    onChange={handleChangeAnimal}
                    className="select-dropdown"
                  >
                    <option value="">----</option>
                    {animals.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            )}
            <div className="add-reminder-container-button">
              <input
                className="button button-connexion add-reminder-container-button-submit"
                type="submit"
                value="Enregistrer le rappel"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewReminder;
