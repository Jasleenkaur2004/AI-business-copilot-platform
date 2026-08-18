export type AuthType =
  | "apiKey"
  | "bearer"
  | "oauth2"
  | "basic"
  | "custom";

export interface Integration {
  id: string;
  name: string;
  type: string;
  baseUrl: string;
  authType: AuthType;
  credentialReference?: string;
  status: "active" | "inactive" | "error";
  createdAt?: string;
  updatedAt?: string;
}