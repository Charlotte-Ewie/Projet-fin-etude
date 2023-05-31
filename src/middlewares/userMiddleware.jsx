// import axios from "axios";
import API from "../api";

// import des fichiers action
import { LOAD_FAVORITES, LOAD_PROFIL, saveProfil, saveFavorites, DELETE_FAVORITE, loadFavorites, ADD_FAVORITE } from "../actions/user";

// Notre UserhMiddleware est appelé à chaque connexion de la part de l'utilisateur
const userMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;
  switch (action.type) {
    case LOAD_PROFIL:
      // Je crée ma variable pour récupérer les informations du user
      if (token === "") {
        console.warn("No token, not fetching profile data");
        return;
      }

      // On requete notre api avec les données enregistrées par l'user
      API.user.profil(token).then((response) => {
        // et on stock la réponse renvoyée
        const profil = response.data;
        store.dispatch(saveProfil(profil));
      });
      break;

    case LOAD_FAVORITES:

      API.favorite.loadFavorites(token).then((response) => {
        const favorites = response.data;
        store.dispatch(saveFavorites(favorites));
      });
      break;

    case DELETE_FAVORITE:
      console.log(token),
        API.favorite.deleteFavorite(token, action.veterinaryId).then((response) => {
          console.log(response);
          store.dispatch(loadFavorites());
        });
      break;

    case ADD_FAVORITE:
      API.favorite.addFavorite(token, action.veterinaryId).then((response) => {
        store.dispatch(loadFavorites());
      });
    default:
  }
  next(action);
};

export default userMiddleware;
