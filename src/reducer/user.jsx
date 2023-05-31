// Reducer pour afficher et modifier les informations du profil

//  Import actions
import {
  CHANGE_PROFIL,
  SAVE_AUTH_TOKEN,
  LOGOUT,
  SAVE_PROFIL,
  SAVE_FAVORITES,
  CHANGE_NAVBAR,
} from "../actions/user";

// Je crée mon initialState pour afficher les infos du profil
export const initialState = {
  profil: {
    id: "",
    email: "",
    firstname: "",
    lastname: "",
    phone_number: "",
    address: "",
    zip_code: "",
    city: "",
    role: "",
  },
  token: "",
  favorites: [],
  isOpen: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Je crée mon changement d'état pour modifier les infos du profil
    case CHANGE_PROFIL:
      return {
        ...state,
        profil: { ...state.profil, [action.identifier]: action.newValue },
      };

    // Je crée mon changement d'état pour sauvegarder le token
    case SAVE_AUTH_TOKEN:
      const { token } = action;
      return { ...state, token };

    // Je crée mon changement d'état pour sauvegarder les infos du profil
    case SAVE_PROFIL:
      const { profil } = action;
      return { ...state, profil };

    // Je crée mon changement d'état pour se déconnecter
    case LOGOUT:
      return initialState;

    case SAVE_FAVORITES:
      const { favorites } = action;
      return { ...state, ...favorites };

    case CHANGE_NAVBAR:
      const { isOpen } = action;
      return { ...state, isOpen: !isOpen };
  
    default:
      return state;
  }
};

export default reducer;
