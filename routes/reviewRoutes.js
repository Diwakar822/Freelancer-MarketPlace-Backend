const express = require("express");
const { createReview, getFreelancerReviews } = require("../controllers/reviewController");
// const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes (require authentication)
// router.use(authMiddleware);

// Create a review
router.post("/reviews", createReview);

// Get reviews for a freelancer
router.get("/reviews/:freelancerId", getFreelancerReviews);

module.exports = router;