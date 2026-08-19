import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

import firebaseAdminApp from "../../config/firebase.js";

const auth = getAuth(firebaseAdminApp);
const db = getFirestore(firebaseAdminApp);

export interface RegisterUserData {
  email: string;
  password: string;
  displayName: string;
  companyId: string;
  role: "owner" | "admin" | "member";
}

export const registerUser = async (data: RegisterUserData) => {
  const userRecord = await auth.createUser({
    email: data.email,
    password: data.password,
    displayName: data.displayName,
  });

  const now = new Date().toISOString();

  const userProfile = {
    uid: userRecord.uid,
    displayName: data.displayName,
    email: data.email,
    role: data.role,
    companyId: data.companyId,
    photoUrl: "",
    status: "active" as const,
    createdAt: now,
    updatedAt: now,
  };

  await db.collection("users").doc(userRecord.uid).set(userProfile);


  return userProfile;

};

