
import mongoose from "mongoose";
import ContactMessage from "../models/ContactMessage.js";

// POST /api/contact
// Farmer: submit a contact enquiry
export const createContactMessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (
      !name?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all contact form fields.",
      });
    }

    if (!/^[0-9]{10}$/.test(phone.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number.",
      });
    }

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (name.trim().length > 100 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        message: "The name or message exceeds the allowed length.",
      });
    }

    const contactMessage = await ContactMessage.create({
      farmer: req.user._id,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      enquiryId: contactMessage._id,
    });
  } catch (error) {
    console.error("Create contact enquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your enquiry. Please try again.",
    });
  }
};


// GET /api/contact
// Admin: fetch all farmer enquiries
export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find()
      .populate("farmer", "name email phone")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Fetch contact enquiries error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact enquiries.",
    });
  }
};


// PATCH /api/contact/:id/read
// Admin: mark an enquiry as read
export const markContactMessageAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry ID.",
      });
    }

    const enquiry = await ContactMessage.findByIdAndUpdate(
      id,
      { status: "read" },
      { new: true, runValidators: true }
    ).populate("farmer", "name email phone");

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry marked as read.",
      enquiry,
    });
  } catch (error) {
    console.error("Update contact enquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update the enquiry.",
    });
  }
};
