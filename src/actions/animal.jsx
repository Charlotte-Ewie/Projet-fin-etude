export const LOAD_ANIMALS = "LOAD_ANIMALS";
export const SAVE_ANIMALS = "SAVE_ANIMALS";
export const CHANGE_COMPANION = "CHANGE_COMPANION";

// Action pour charger les données des animaux
export const loadAnimals = () => ({
  type: LOAD_ANIMALS,
});

// Action pour sauvegarder les données des animaux
export const saveAnimals = (animals) => ({
  type: SAVE_ANIMALS,
  animals,
});

// Action pour modifier les informations dans les champs du compagnon
export const updateFieldCompanion = (companionId, identifier, newValue) => ({
  type: CHANGE_COMPANION,
  companionId,
  newValue,
  identifier,
});