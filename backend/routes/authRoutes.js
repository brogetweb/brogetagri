
import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// =====================================
// USER REGISTRATION
// =====================================
router.post("/register", registerUser);

// =====================================
// USER LOGIN
// =====================================
router.post("/login", loginUser);

// =====================================
// GET LOGGED-IN USER
// =====================================
router.get("/me", authMiddleware, getCurrentUser);

export default router;
