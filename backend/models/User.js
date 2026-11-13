
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    role: {
      type: String,
      enum: [
        "farmer",
        "buyer",
        "agricultureExpert",
        "admin",
      ],
      default: "buyer",
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    address: {
      street: {
        type: String,
        default: "",
      },
      village: {
        type: String,
        default: "",
      },
      taluka: {
        type: String,
        default: "",
      },
      district: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      pincode: {
        type: String,
        default: "",
      },
    },

    farmDetails: {
      farmName: {
        type: String,
        default: "",
      },
      landArea: {
        type: Number,
        default: 0,
      },
      landUnit: {
        type: String,
        enum: ["acre", "hectare", "guntha"],
        default: "acre",
      },
      crops: {
        type: [String],
        default: [],
      },
    },

    // Agriculture Expert Details
    expertDetails: {
      qualification: {
        type: String,
        default: "",
      },
      specialization: {
        type: [String],
        default: [],
      },
      experience: {
        type: Number,
        default: 0,
      },
      certification: {
        type: String,
        default: "",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
