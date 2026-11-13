
import mongoose from "mongoose";
import Service from "../models/Service.js";

// POST /api/services
// Admin: Add a new service
export const createService = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      image,
      price,
      duration,
      benefits,
    } = req.body;

    if (
      typeof title !== "string" ||
      typeof category !== "string" ||
      typeof description !== "string" ||
      !title.trim() ||
      !category.trim() ||
      !description.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title, category and description are required.",
      });
    }

    if (
      title.trim().length > 120 ||
      description.trim().length > 2000
    ) {
      return res.status(400).json({
        success: false,
        message: "Title or description exceeds the allowed length.",
      });
    }

    if (
      price !== undefined &&
      (!Number.isFinite(Number(price)) || Number(price) < 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Price must be a valid non-negative number.",
      });
    }

    if (benefits !== undefined && !Array.isArray(benefits)) {
      return res.status(400).json({
        success: false,
        message: "Benefits must be an array.",
      });
    }

    const service = await Service.create({
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      image,
      price: price === undefined ? 0 : Number(price),
      duration,
      benefits,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Service added successfully.",
      service,
    });
  } catch (error) {
    console.error("Create service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to add service.",
    });
  }
};


// GET /api/services
// Public: Get all active services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({
      isActive: true,
    })
      .sort({ createdAt: -1 })
      .populate("createdBy", "name");

    return res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error("Fetch services error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch services.",
    });
  }
};


// GET /api/services/:id
// Public: Get one active service
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid service ID.",
      });
    }

    const service = await Service.findOne({
      _id: id,
      isActive: true,
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    return res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.error("Fetch service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch service.",
    });
  }
};


// PUT /api/services/:id
// Admin: Update a service
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid service ID.",
      });
    }

    const allowedFields = [
      "title",
      "category",
      "description",
      "image",
      "price",
      "duration",
      "benefits",
      "isActive",
    ];

    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one field to update.",
      });
    }

    const service = await Service.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Service updated successfully.",
      service,
    });
  } catch (error) {
    console.error("Update service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update service.",
    });
  }
};


// DELETE /api/services/:id
// Admin: Delete a service
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid service ID.",
      });
    }

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully.",
    });
  } catch (error) {
    console.error("Delete service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete service.",
    });
  }
};
