// import axios from "axios";
import API from "../api";

// import des fichiers action
import { LOAD_ANIMALS, saveAnimals } from "../actions/animal";

// Notre UserhMiddleware est appelé à chaque connexion de la part de l'utilisateur
const animalsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ANIMALS:
      // Je crée ma variable pour récupérer les informations du user
      const { token } = store.getState().user;

      if (token === "") {
        console.warn("No token, not fetching animals data");
        return;
      }

      // On requete notre api avec les données enregistrées par l'user
      API.animals.axiosAnimal(token).then((response) => {
        // et on stock la réponse renvoyée
        const animals = response.data.animals;

        store.dispatch(saveAnimals(animals));
      });
      break;
    default:
  }
  next(action);
};

export default animalsMiddleware;
