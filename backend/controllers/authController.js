
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

// =====================================
// HELPER: CREATE JWT TOKEN
// =====================================
const createToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing from environment variables.");
  }

  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// =====================================
// HELPER: SAFE USER RESPONSE
// Never return password
// =====================================
const publicUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  role: user.role,
  profileImage: user.profileImage,
  address: user.address,
  farmDetails: user.farmDetails,
  expertDetails: user.expertDetails,
  isActive: user.isActive,
  expertApprovalStatus: user.expertApprovalStatus || "not_required",
});

// =====================================
// REGISTER USER
// =====================================
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      role,
      address,
      farmDetails,
      expertDetails,
    } = req.body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Allowed registration roles
    const selectedRole = role || "buyer";

    const allowedRoles = [
      "farmer",
      "buyer",
      "agricultureExpert",
    ];

    if (!allowedRoles.includes(selectedRole)) {
      return res.status(400).json({
        success: false,
        message: "Invalid registration role.",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 8 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check existing user
    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Expert approval status
    const expertApprovalStatus =
      selectedRole === "agricultureExpert"
        ? "pending"
        : "not_required";

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      phone: phone || "",
      role: selectedRole,
      address: address || {},
      farmDetails:
        selectedRole === "farmer" ? farmDetails || {} : {},
      expertDetails:
        selectedRole === "agricultureExpert"
          ? expertDetails || {}
          : {},
      expertApprovalStatus,
      isActive: true,
    });

    const token = createToken(user);

    return res.status(201).json({
      success: true,
      message:
        selectedRole === "agricultureExpert"
          ? "Registration successful. Your expert application is pending admin approval."
          : "Registration successful.",
      token,
      user: publicUser(user),
    });

  } catch (error) {
    console.error("Registration Error:", error);

    // Duplicate email handling
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Registration failed. Please try again.",
    });
  }
};

// =====================================
// LOGIN USER
// =====================================
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate fields
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter email, password and role.",
      });
    }

    // Allowed login roles
    const allowedRoles = [
      "farmer",
      "buyer",
      "agricultureExpert",
      "admin",
    ];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid login role.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Verify role
    if (user.role !== role) {
      return res.status(403).json({
        success: false,
        message: `This account is not registered as a ${role}.`,
      });
    }

    // Check account status
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated.",
      });
    }

    const token = createToken(user);

    let message = "Login successful.";

    // Expert approval status
    if (
      user.role === "agricultureExpert" &&
      user.expertApprovalStatus === "pending"
    ) {
      message =
        "Your expert application is pending admin approval.";
    } else if (
      user.role === "agricultureExpert" &&
      user.expertApprovalStatus === "rejected"
    ) {
      message =
        "Your expert application was rejected.";
    } else if (
      user.role === "agricultureExpert" &&
      user.expertApprovalStatus !== "approved"
    ) {
      message =
        "Your expert account is awaiting verification.";
    }

    return res.status(200).json({
      success: true,
      message,
      token,
      user: publicUser(user),
    });

  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again.",
    });
  }
};

// =====================================
// GET CURRENT LOGGED-IN USER
// =====================================
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      user: publicUser(user),
    });

  } catch (error) {
    console.error("Get Current User Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user details.",
    });
  }
};
