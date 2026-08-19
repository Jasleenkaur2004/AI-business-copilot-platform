import { Router } from "express";

import {
  getCurrentUser,
  register,
} from "../modules/auth/auth.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";

const router = Router();

router.post("/register", register);

router.get("/me", authenticate, getCurrentUser);

router.get(
  "/owner-test",
  authenticate,
  requireRole("owner"),
  getCurrentUser
);

export default router;