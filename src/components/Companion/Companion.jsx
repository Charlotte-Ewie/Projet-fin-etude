// Page de mes compagnons
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateFieldCompanion, loadAnimals } from "../../actions/animal";
import { loadRemindersByCompanion } from "../../actions/reminder";

import { Link, useParams, useNavigate } from "react-router-dom";

// Styles
import "./Companion.scss";

// Components partials
import NavBar from "../partials/NavBar/NavBar";
import Reminders from "../Reminders/Reminders";

//Import API
import API from "../../api";

function Companion() {
  const { token } = useSelector((state) => state.user);
  const { animals } = useSelector((state) => state.animal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Je récupère l'id du compagnon dans l'URL
  const { companionId } = useParams();

  useEffect(() => {
    dispatch(loadAnimals());
  }, [companionId]);

  useEffect(() => {
    if (companionId) {
      dispatch(loadRemindersByCompanion(companionId));
    }
  }, [companionId]);

  // Je récupère les infos du compagnon
  const companion = animals.find(
    (companion) => companion.id === Number(companionId)
  );
  const labelName = {
    name: "Nom",
    birthdate: "Date de naissance",
    specie: "Type d'animal",
    breed: "Race de votre compagnon",
    memo: "Modifier le contenu du mémo",
  };

  const [focusedInput, setFocusedInput] = useState(null);
  const [memoIsFocus, setMemoIsFocus] = useState(false);

  const inputRefs = useRef([]);

  // fonction de mise à jour du store au changement de valeurs des inputs
  const handleChange = (identifier, newValue) =>
    dispatch(updateFieldCompanion(companion.id, identifier, newValue));

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
    API.update.animalEdit(
      token,
      inputRefs.current[index].name,
      inputRefs.current[index].value,
      companion.id
    );
  }

  // fonction pour rendre l'input en lecture seule en appuyant sur entrée
  function handleKeyDown(e, index) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleValidate(index);
    }
  }

  function handleDelete() {
    API.delete.animal(token, companion.id).then(() => {
      navigate("/account");
    });
  }

  if (!companion) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="component-container">
      <NavBar />
      <div className="companion">
        <Reminders />
        <section className="myMemo">
          <h2>Mon mémo santé</h2>
          <input
            className="input-memo"
            type="text"
            value={companion.memo ? companion.memo : ""}
            readOnly={!memoIsFocus}
            onChange={(e) => handleChange("memo", e.target.value)}
            onBlur={() => {
              setMemoIsFocus(false);
              API.update.animalEdit(
                token,
                "memo",
                companion.memo,
                companion.id
              );
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setMemoIsFocus(false);
                API.update.animalEdit(
                  token,
                  "memo",
                  companion.memo,
                  companion.id
                );
              }
            }}
          />
          {!memoIsFocus && (
            <img
              className="icon-memo"
              src="../../../public/icons/write.png"
              alt="write icon"
              onClick={(e) => {
                e.target.previousElementSibling.readOnly = false;
                e.target.previousElementSibling.focus();
                setMemoIsFocus(true);
              }}
            />
          )}
          {memoIsFocus && (
            <img src="../../../public/icons/validate.png" alt="write icon" />
          )}{" "}
          <label className="label-memo">{labelName.memo}</label>
        </section>
        <section className="form form-companion">
          <div className="form-header">
            <h2>Mon compagnon</h2>
            <img
              src={`/images/${companion.specie}.png`}
              alt={companion.specie}
            />{" "}
            <h3>{companion.name}</h3>
          </div>
          <div className="form-content">
            {Object.keys(companion)
              .filter(
                (prop) =>
                  prop !== "id" && prop !== "memo" && prop !== "account_id"
              )
              .map((prop, index) => (
                <div
                  className="companion"
                  key={`input-${prop.toLowerCase().replace(" ", "-")}`}
                >
                  <label className="label">
                    {labelName[prop]}

                    <input
                      className="input"
                      name={prop}
                      placeholder=" Nom de votre compagnon"
                      value={companion[prop]}
                      readOnly
                      type="text"
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
        <button className="delete-button" onClick={handleDelete}>
          Retirer un animal
        </button>
      </div>
    </div>
  );
}

export default Companion;
