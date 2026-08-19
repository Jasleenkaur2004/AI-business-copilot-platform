import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);

export const registerUser = async (data: {
  email: string;
  password: string;
  displayName: string;
  companyId: string;
  role: "owner" | "admin" | "member";
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result.data;
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const idToken = await userCredential.user.getIdToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Authentication failed");
  }

  return {
    user: userCredential.user,
    idToken,
    profile: result.data,
  };
};


export const logoutUser = async () => {
  await auth.signOut();
};