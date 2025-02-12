const Review = require("../models/reviewModel");

// Create a review
const createReview = async (req, res) => {
  const {  freelancerName,rating, comment } = req.body;
  // const clientId = req.user.id; // Client ID from authenticated user

  try {
    const newReview = new Review({  freelancerName,rating, comment });
    await newReview.save();

    res.status(201).json({ success: true, message: "Review created successfully"});
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get reviews for a freelancer
const getFreelancerReviews = async (req, res) => {
  const { freelancerId } = req.params;

  try {
    const reviews = await Review.find()
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createReview, getFreelancerReviews };


// const Review = require("../models/reviewModel");

// // Create a review
// const createReview = async (req, res) => {
//   const { freelancerId, freelancerName, rating, comment } = req.body;
//   const clientId = req.user?.id; // Ensure req.user exists

//   if (!freelancerId) {
//     return res.status(400).json({ success: false, message: "Freelancer ID is required" });
//   }

//   try {
//     const newReview = new Review({ freelancerId, freelancerName, clientId, rating, comment });
//     await newReview.save();

//     res.status(201).json({ success: true, message: "Review created successfully" });
//   } catch (error) {
//     console.error("Error creating review:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // Get reviews for a freelancer
// const getFreelancerReviews = async (req, res) => {
//   const { freelancerId } = req.params;

//   if (!freelancerId) {
//     return res.status(400).json({ success: false, message: "Freelancer ID is required" });
//   }

//   try {
//     const reviews = await Review.find({ freelancerId });
//     res.status(200).json({ success: true, reviews });
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// module.exports = { createReview, getFreelancerReviews };
