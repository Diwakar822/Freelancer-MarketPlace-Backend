const express = require("express");
const { createNotification, getUserNotifications } = require("../controllers/notificationController");
// const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes (require authentication)
// router.use(authMiddleware);

// Create a notification
router.post("/notifications", createNotification);

// Get notifications for a user
router.get("/notifications", getUserNotifications);

module.exports = router;