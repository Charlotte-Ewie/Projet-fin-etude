export const LOAD_REMINDERS = "LOAD_REMINDERS";
export const SAVE_REMINDERS = "SAVE_REMINDERS";
export const LOAD_REMINDERS_BY_COMPANION = "LOAD_REMINDERS_BY_COMPANION"
export const SAVE_REMINDERS_BY_COMPANION = "SAVE_REMINDERS_BY_COMPANION"

// Action pour charger les données des rappels
export const loadReminders = () => ({
  type: LOAD_REMINDERS,
});

// Action pour charger les données des rappels
export const saveReminders = (reminders) => ({
  type: SAVE_REMINDERS,
  reminders,
});

// Action pour charger les données des rappels
export const loadRemindersByCompanion = (companionId) => ({
  type: LOAD_REMINDERS_BY_COMPANION,
  companionId,
});

// Action pour charger les données des rappels
export const saveRemindersByCompanion = (remindersByCompanion) => ({
  type: SAVE_REMINDERS_BY_COMPANION,  
  remindersByCompanion,
});
