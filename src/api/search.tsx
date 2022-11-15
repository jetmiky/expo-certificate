import api from "../config/api";

function encodeCode(code: string) {
  return btoa(code);
}

export function search(code: string) {
  const encodedCode = encodeCode(code);
  return api.get(`/certificates/${encodedCode}`);
}
