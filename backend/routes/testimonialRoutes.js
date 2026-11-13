
import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  getApprovedTestimonials,
  createTestimonial,
  getPendingTestimonials,
  reviewTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

// Public: get approved testimonials
router.get("/", getApprovedTestimonials);

// Public: submit a testimonial
router.post("/", createTestimonial);

// Super Admin: get pending testimonials
router.get(
  "/admin/pending",
  authMiddleware,
  roleMiddleware("superadmin"),
  getPendingTestimonials
);

// Super Admin: approve or reject testimonial
router.patch(
  "/admin/:id/review",
  authMiddleware,
  roleMiddleware("superadmin"),
  reviewTestimonial
);

export default router;
