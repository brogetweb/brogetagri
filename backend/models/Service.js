
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    image: {
      type: String,
      default: "",
      trim: true,
    },

    price: {
      type: Number,
      min: 0,
      default: 0,
    },

    duration: {
      type: String,
      default: "",
      trim: true,
    },

    benefits: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
