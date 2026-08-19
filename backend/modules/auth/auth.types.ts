export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  role: "owner" | "admin" | "member";
  companyId: string;
  photoUrl: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}