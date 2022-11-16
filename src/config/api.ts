import axios from "axios";

const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:5001/expo-certificate/us-central1/api";

const api = axios.create({ baseURL });

export const setAuthorization = (token: string) => {
  const authToken = `Bearer ${token}`;

  window.localStorage.setItem("Authorization", token);
  api.defaults.headers.common["Authorization"] = authToken;
};

export const checkIsAuthorized = () => {
  // TODO: Add method to check token validity
  const token = window.localStorage.getItem("Authorization");
  if (!!token) setAuthorization(token);

  return !!token;
};

export default api;
