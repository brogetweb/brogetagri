
import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

// Public: Get all active services
router.get("/", getAllServices);

// Public: Get service by ID
router.get("/:id", getServiceById);

// Admin: Add service
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createService
);

// Admin: Update service
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateService
);

// Admin: Delete service
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteService
);

export default router;
