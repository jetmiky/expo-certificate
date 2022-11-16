import api from "../config/api";

function encodeId(id: string) {
  return btoa(id);
}

export const addCertificate = async (certificate) => {
  return api.post("/certificates", { ...certificate });
};

export function search(id: string) {
  const encodedCode = encodeId(id);
  return api.get(`/certificates/${encodedCode}`);
}
