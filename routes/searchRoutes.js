const express = require("express");
const { searchFreelancers, searchJobs } = require("../controllers/searchController");

const router = express.Router();

// Search freelancers
router.get("/freelancers", searchFreelancers);

// Search jobs
router.get("/jobs", searchJobs);

module.exports = router;