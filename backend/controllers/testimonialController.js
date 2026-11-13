
import mongoose from "mongoose";
import Testimonial from "../models/Testimonial.js";

// GET /api/testimonials
// Public: fetch approved testimonials
export const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      status: "approved",
    }).sort({
      reviewedAt: -1,
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      testimonials,
    });
  } catch (error) {
    console.error("Fetch testimonials error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials.",
    });
  }
};


// POST /api/testimonials
// Public: submit a testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name and review are required.",
      });
    }

    if (
      name.trim().length > 80 ||
      message.trim().length > 1000
    ) {
      return res.status(400).json({
        success: false,
        message: "Name or review exceeds the allowed length.",
      });
    }

    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    const testimonial = await Testimonial.create({
      name: name.trim(),
      rating: numericRating,
      message: message.trim(),
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message:
        "Your review has been submitted successfully and is awaiting Super Admin approval.",
      testimonial,
    });
  } catch (error) {
    console.error("Submit testimonial error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit testimonial.",
    });
  }
};


// GET /api/testimonials/admin/pending
// Super Admin: fetch pending testimonials
export const getPendingTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      status: "pending",
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      testimonials,
    });
  } catch (error) {
    console.error("Pending testimonials error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch pending testimonials.",
    });
  }
};


// PATCH /api/testimonials/admin/:id/review
// Super Admin: approve or reject a testimonial
export const reviewTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid testimonial ID.",
      });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be approved or rejected.",
      });
    }

    const testimonial = await Testimonial.findOneAndUpdate(
      {
        _id: id,
        status: "pending",
      },
      {
        $set: {
          status,
          reviewedAt: new Date(),
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message:
          "Pending testimonial not found. It may already have been reviewed.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        status === "approved"
          ? "Testimonial approved and published successfully."
          : "Testimonial rejected successfully.",
      testimonial,
    });
  } catch (error) {
    console.error("Review testimonial error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update testimonial.",
    });
  }
};
