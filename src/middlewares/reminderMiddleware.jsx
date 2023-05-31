// import axios from "axios";
import API from "../api";

// import des fichiers action
import { LOAD_REMINDERS, saveReminders, LOAD_REMINDERS_BY_COMPANION, saveRemindersByCompanion } from "../actions/reminder";

// Notre reminderMiddleware est appelé à chaque connexion de la part de l'utilisateur
const remindersMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;
  switch (action.type) {
    case LOAD_REMINDERS:
      // Je crée ma variable pour récupérer les informations du user

      if (token === "") {
        console.warn("No token, not fetching reminders data");
        return;
      }

      // On requete notre api avec les données enregistrées par l'user
      API.reminders.axiosReminders(token).then((response) => {
        // et on stock la réponse renvoyée
        const reminders = response.data.reminders;
        store.dispatch(saveReminders(reminders))
      })
      break;
    case LOAD_REMINDERS_BY_COMPANION:
      // Je crée ma variable pour récupérer les informations du user

      if (token === "") {
        console.warn("No token, not fetching reminders data");
        return;
      }

      API.reminders.axiosRemindersByCompanion(token, action.companionId).then((response) => {
        const remindersByCompanion = response.data.reminders;
        store.dispatch(saveRemindersByCompanion(remindersByCompanion))
      })
      break;
    default:
  }
  next(action);
};

export default remindersMiddleware;
