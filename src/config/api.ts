import axios from "axios";
import { auth } from "./firebase";

const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:5001/expo-certificate/us-central1/api";

const api = axios.create({ baseURL });

export const setAPIAuthorization = (token: string) => {
  const authToken = `Bearer ${token}`;
  api.defaults.headers.common["Authorization"] = authToken;
};

export const removeAPIAuthorization = async () => {
  delete api.defaults.headers.common["Authorization"];
  return await auth.signOut();
};

export default api;
