import api from "../config/api";

// Types
import Certificate from "../types/Certificate";

export const addCertificate = async (
  certificate: Certificate | Certificate[]
) => {
  return api.post("/frontend/certificates", certificate);
};

export function search(id: string) {
  return api.get(`/certificates/find/${id}`);
}

export function editCertificate(id: string, certificate: Certificate) {
  return api.put(`/frontend/certificates/${id}`, certificate);
}

export async function deleteCertificate(id: string) {
  return api.delete(`/frontend/certificates/${id}`);
}

export async function download(id: string) {
  return api.get(`/certificates/download/${id}`, { responseType: "blob" });
}

export async function getTemplates() {
  return api.get("/frontend/templates");
}
