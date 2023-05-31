// Reducer pour afficher et modifier les informations d'un animal

import { SAVE_ANIMALS, CHANGE_COMPANION } from "../actions/animal";

//  Import actions
// import {

// } from "../actions/user";

// Je crée mon initialState pour afficher les infos d'un animal
export const initialState = {
  animals: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Je crée mon changement d'état pour sauvegarder les infos de ma requete Axios
    case SAVE_ANIMALS:
      const { animals } = action;
      return { ...state, animals };
      
    // Je crée mon changement d'état pour modifier les infos du profil
    case CHANGE_COMPANION:
      const companion = state.animals.find((animal) => animal.id === action.companionId);
      if (!companion) {
        console.log('Companion not found', { action });
        return state;
      }

      companion[action.identifier] = action.newValue;

      return {
        ...state,
        animals: state.animals.map((animal) => {
          if (animal.id !== action.companionId) {
            return animal;
          }
          return companion;
        }),
      };
      
    default:
      return state;
  }
};

export default reducer;
