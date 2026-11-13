
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// =====================================
// AUTHENTICATION MIDDLEWARE
// =====================================
const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please login first.",
      });
    }

    const token = authHeader.split(" ")[1];

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing.");

      return res.status(500).json({
        success: false,
        message: "Server authentication configuration error.",
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find user in database
    const user = await User.findById(decoded.userId).select(
      "-password"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found. Please login again.",
      });
    }

    // Check whether account is active
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated.",
      });
    }

    // Attach user details to request
    req.user = user;

    next();

  } catch (error) {
    console.error("Authentication Error:", error.message);

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token. Please login again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Authentication failed.",
    });
  }
};

export default authMiddleware;
