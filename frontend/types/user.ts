export type UserRole = "admin" | "manager" | "member";

export interface User {
  id: string;
  displayName: string;
  email: string;
  role: UserRole;
  companyId: string;
  photoUrl?: string;
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}