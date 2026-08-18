import { apiRequest } from "./api";

export async function getIntegrations() {
  return apiRequest("/api/integrations");
}

export async function createIntegration(data: unknown) {
  return apiRequest("/api/integrations", {
    method: "POST",
    body: JSON.stringify(data),
  });
}