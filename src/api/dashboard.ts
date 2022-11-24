import api from "../config/api";

export function getDashboardData() {
  return api.get("/dashboard");
}
