
const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Please login first.",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Unauthorized role.",
      });
    }

    // Only approved agriculture experts can provide advice
    if (
      req.user.role === "agricultureExpert" &&
      req.user.expertApprovalStatus !== "approved"
    ) {
      return res.status(403).json({
        success: false,
        message: "Your expert account is not approved.",
      });
    }

    next();
  };
};

export default roleMiddleware;
