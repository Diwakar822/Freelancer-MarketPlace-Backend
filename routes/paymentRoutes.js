const express = require("express");
const { createOrder } = require("../controllers/paymentController");
// const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes (require authentication)
// router.use(authMiddleware);

// Create a Razorpay order
router.post("/create-order", createOrder);

module.exports = router;