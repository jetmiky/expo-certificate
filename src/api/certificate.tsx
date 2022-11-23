import api from "../config/api";

// Types
import Certificate from "../types/Certificate";

export const addCertificate = async (
  certificate: Certificate | Certificate[]
) => {
  return api.post("/certificates", certificate);
};

export function search(id: string) {
  return api.get(`/certificates/${id}`);
}

export async function deleteCertificate(id: string) {
  return api.delete(`/certificates/${id}`);
}
