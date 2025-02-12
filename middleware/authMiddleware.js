const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Authentication middleware
const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID and role to the request object
    req.user = { id: decoded.id, role: decoded.role };
    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;