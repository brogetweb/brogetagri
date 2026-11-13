
import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  createContactMessage,
  getContactMessages,
  markContactMessageAsRead,
} from "../controllers/contactController.js";

const router = express.Router();

// Farmer submits an enquiry
router.post(
  "/",
  authMiddleware,
  roleMiddleware("farmer"),
  createContactMessage
);

// Admin views all farmer enquiries
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getContactMessages
);

// Admin marks an enquiry as read
router.patch(
  "/:id/read",
  authMiddleware,
  roleMiddleware("admin"),
  markContactMessageAsRead
);

export default router;
