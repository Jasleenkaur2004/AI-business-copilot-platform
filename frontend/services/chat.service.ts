import { apiRequest } from "./api";

export async function sendChatMessage(message: string) {
  return apiRequest("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      message,
    }),
  });
}