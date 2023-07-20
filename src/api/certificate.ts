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

export function editCertificate(id: string, certificate: Certificate) {
  return api.put(`/certificates/${id}`, certificate);
}

export async function deleteCertificate(id: string) {
  return api.delete(`/certificates/${id}`);
}

export async function download(id: string) {
  return api.get(`/download/${id}`, { responseType: "blob" });
}
