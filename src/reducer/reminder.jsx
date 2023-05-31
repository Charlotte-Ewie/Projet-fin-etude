// Reducer pour afficher et supprimer mes rappels 

//  Import actions
import { SAVE_REMINDERS, SAVE_REMINDERS_BY_COMPANION } from "../actions/reminder";

// Je crée mon initialState pour afficher les rappels
export const initialState = {
  reminders: [],
  remindersByCompanion: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    // Je crée mon changement d'état pour sauvegarder les infos de ma requete Axios
    case SAVE_REMINDERS:
      const { reminders } = action;
      return { ...state, reminders };
   
    case SAVE_REMINDERS_BY_COMPANION: 
      const { remindersByCompanion } = action;
      return { ...state, remindersByCompanion };

    default:
      return state;
  
    }
}
  
export default reducer;