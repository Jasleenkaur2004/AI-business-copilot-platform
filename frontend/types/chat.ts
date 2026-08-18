export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  userId: string;
  role: MessageRole;
  content: string;
  createdAt?: string;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string;
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
}