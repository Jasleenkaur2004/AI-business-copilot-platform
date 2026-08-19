import type { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";

import firebaseAdminApp from "../config/firebase.js";

const adminAuth = getAuth(firebaseAdminApp);

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format",
      });
    }

    const idToken = authorization.split("Bearer ")[1];

    if (!idToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization token",
      });
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token",
    });
  }
};