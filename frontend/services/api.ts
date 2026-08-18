import { apiConfig } from "@/config/api.config";

export async function apiRequest(
  endpoint: string,
  options?: RequestInit
) {
  const response = await fetch(
    `${apiConfig.baseUrl}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  return response.json();
}