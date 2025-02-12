const Notification = require("../models/notificationModel");

// Create a notification
const createNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newNotification = new Notification({ userId, message });
    await newNotification.save();

    res.status(201).json({ success: true, message: "Notification created successfully" });
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get notifications for a user
const getUserNotifications = async (req, res) => {
  // const userId = req.user.id;

  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createNotification, getUserNotifications };