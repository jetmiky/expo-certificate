import { AxiosError } from "axios";
import api, { setAuthorization, removeAuthorization } from "../config/api";

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/admins/login", { username, password });
    const token = response.data.token;

    setAuthorization(token);
  } catch (error: AxiosError | any) {
    if (error.response && error.response.status === 401) {
      throw new Error("Login failed.");
    }

    throw new Error("Unexpected error occured.");
  }
};

export const logout = () => {
  removeAuthorization();
};
