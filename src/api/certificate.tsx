import api from "../config/api";

export const addCertificate = async (certificate) => {
  return api.post("/certificates", { ...certificate });
};
