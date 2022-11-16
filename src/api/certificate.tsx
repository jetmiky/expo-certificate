import api from "../config/api";

// Types
import Certificate from "../types/Certificate";

function encodeId(id: string) {
  return btoa(id);
}

export const addCertificate = async (certificate: Certificate) => {
  return api.post("/certificates", { ...certificate });
};

export function search(id: string) {
  const encodedCode = encodeId(id);
  return api.get(`/certificates/${encodedCode}`);
}

export async function deleteCertificate(id: string) {
  const encodedCode = encodeId(id);
  return api.delete(`/certificates/${encodedCode}`);
}
