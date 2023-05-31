// export des actions
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SAVE_AUTH_TOKEN = "SAVE_AUTH_TOKEN";
export const CHANGE_PROFIL = "CHANGE_PROFIL";
export const LOAD_PROFIL = "LOAD_PROFIL";
export const SAVE_PROFIL = "SAVE_PROFIL";
export const LOGOUT = "LOGOUT";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const SAVE_FAVORITES = "SAVE_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const CHANGE_NAVBAR = "CHANGE_NAVBAR";

// Action pour se connecter
export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

// Action pour sauvegarder ce que renvoie l'API pour le stocker dans le store
export const saveAuthToken = (token) => ({
  type: SAVE_AUTH_TOKEN,
  token,
});

// Action pour charger les données du profil
export const loadProfil = () => ({
  type: LOAD_PROFIL,
});

// Action pour sauvegarder les données du profil
export const saveProfil = (profil) => ({
  type: SAVE_PROFIL,
  profil,
});

// Action pour modifier les informations dans les champs du profil
export const updateField = (identifier, newValue) => ({
  type: CHANGE_PROFIL,
  newValue,
  identifier,
});

export const loadFavorites = () => ({
  type: LOAD_FAVORITES,
});

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  favorites,
});
export const deleteFavorite = (veterinaryId) => ({
  type: DELETE_FAVORITE,
  veterinaryId,
});

export const addFavorite = (veterinaryId) => ({
  type: ADD_FAVORITE,
  veterinaryId,
});

//Action pour se déconnecter
export const logout = () => ({
  type: LOGOUT,
});

//Action pour se déconnecter
export const changeNavBar = (isOpen) => ({
  type: CHANGE_NAVBAR,
  isOpen,
});
