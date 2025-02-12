const User = require("../models/userModel");
// const Service = require("../models/services");
const Job = require("../models/Job");

// Search freelancers
const searchFreelancers = async (req, res) => {
  const { skills, location, minRating, maxPrice } = req.query;

  try {
    const filters = {};
    if (skills) filters["profile.skills"] = { $in: skills.split(",") };
    if (location) filters["profile.location"] = location;

    const freelancers = await User.find({ ...filters, role: "freelancer" }).populate("services");

    // Filter by rating and price
    const filteredFreelancers = freelancers.filter((freelancer) => {
      const avgRating = freelancer.reviews.reduce((sum, review) => sum + review.rating, 0) / freelancer.reviews.length;
      return (!minRating || avgRating >= minRating) && (!maxPrice || freelancer.services.price <= maxPrice);
    });

    res.status(200).json({ success: true, freelancers: filteredFreelancers });
  } catch (error) {
    console.error("Error searching freelancers:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Search jobs
const searchJobs = async (req, res) => {
  const { title, category, minBudget, maxBudget } = req.query;

  try {
    const filters = {};
    if (title) filters.title = { $regex: title, $options: "i" };
    if (category) filters.category = category;

    const jobs = await Job.find(filters);

    // Filter by budget
    const filteredJobs = jobs.filter((job) => (!minBudget || job.budget >= minBudget) && (!maxBudget || job.budget <= maxBudget));

    res.status(200).json({ success: true, jobs: filteredJobs });
  } catch (error) {
    console.error("Error searching jobs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchFreelancers, searchJobs };