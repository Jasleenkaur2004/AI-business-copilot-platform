import {
  applicationDefault,
  getApps,
  getApp,
  initializeApp,
} from "firebase-admin/app";

const firebaseAdminApp =
  getApps().length === 0
    ? initializeApp({
        credential: applicationDefault(),
      })
    : getApp();

export default firebaseAdminApp;