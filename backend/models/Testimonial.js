
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model(
  "Testimonial",
  testimonialSchema
);

export default Testimonial;
