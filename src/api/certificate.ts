import api from "../config/api";
import { AxiosResponse } from "axios";

// Types
import Certificate from "../types/Certificate";

export const addCertificate = async (certificate: Certificate) => {
  return api.post("/frontend/certificates", certificate);
};

export const addBatchCertificate = async (
  template: string,
  certificates: Certificate[]
): Promise<AxiosResponse<{ certificates: Certificate[] }>> => {
  return api.post("/frontend/certificates/batch", { template, certificates });
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
