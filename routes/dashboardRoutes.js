const express = require("express");
const { getFreelancerDashboard, getClientDashboard } = require("../controllers/dashboardController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes (require authentication)
router.use(authMiddleware);

// Get freelancer dashboard
router.get("/freelancer/dashboard", getFreelancerDashboard);

// Get client dashboard
router.get("/client/dashboard", getClientDashboard);

module.exports = router;