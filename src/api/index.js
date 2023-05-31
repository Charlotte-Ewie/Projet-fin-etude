import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://dogtolib.herokuapp.com",
});

const API = {
  auth: {
    async signin(email, password) {
      return axios.post("/auth/signin", { email, password });
    },
  },

  user: {
    async profil(token) {
      return axios.get("/profile", {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  register: {
    async newUser(mergeData) {
      return await axios.post("/auth/register", mergeData);
    },
  },

  addCompanion: {
    async addCompanion(token, companionData) {
      return await axios.post("/animal", companionData, {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  update: {
    async accountEdit(token, key, value) {
      return await axios.patch(
        "/profile",
        {
          [key]: value,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
    },

    async animalEdit(token, key, value, id) {
      return await axios.patch(
        `/animal/${id}`,
        {
          [key]: value,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
    },
  },

  reminders: {
    // Méthode pour charger les rappels
    async axiosReminders(token) {
      return axios.get("/reminder", {
        headers: {
          "x-auth-token": token,
        },
      });
    },

    // Méthode pour creer un nouveau rappel
    async newReminder(token, resultMerge) {
      return await axios.post("/reminder", resultMerge, {
        headers: {
          "x-auth-token": token,
        },
      });
    },

    // Méthode pour récupérer un rappel lié à un animal
    async axiosRemindersByCompanion(token, id) {
      return axios.get(`/reminder/animal/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  animals: {
    async axiosAnimal(token) {
      return axios.get("/animal", {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  search: {
    async axiosSearch(token, data) {
      return axios.get("/veterinary/search", {
        params: data,
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  delete: {
    async animal(token, id) {
      return axios.delete(`/animal/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });
    },

    async reminder(token, id) {
      return axios.delete(`/reminder/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },
  favorite: {
    async addFavorite(token, veterinaryId) {
      return axios.post(
        `/favorite`, { veterinary_id: veterinaryId },
        {
          headers: {
            "x-auth-token": token,
          }
        });
    },
    async deleteFavorite(token, veterinaryId) {
      return axios.delete(`/favorite`, {
        headers: {
          "x-auth-token": token,
        },
        data: { veterinary_id: veterinaryId }
      });
    },
    async loadFavorites(token) {
      return axios.get(`/favorite`, {
        headers: {
          "x-auth-token": token,
        },
      });
    }
  }
};

export default API;
