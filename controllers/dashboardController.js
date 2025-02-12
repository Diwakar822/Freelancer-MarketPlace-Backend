// const User = require("../models/userModel");
// const Service = require("../models/serviceModel");
// const Job = require("../models/jobModel");
// // const Contract = require("../models/contractModel");

// // Get freelancer dashboard data
// const getFreelancerDashboard = async (req, res) => {
//   const freelancerId = req.user.id;

//   try {
//     const services = await Service.find({ freelancerId });
//     const contracts = await Contract.find({ freelancerId });
//     const reviews = await Review.find({ freelancerId });

//     res.status(200).json({ success: true, services, contracts, reviews });
//   } catch (error) {
//     console.error("Error fetching freelancer dashboard data:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get client dashboard data
// const getClientDashboard = async (req, res) => {
//   const clientId = req.user.id;

//   try {
//     const jobs = await Job.find({ clientId });
//     const contracts = await Contract.find({ clientId });

//     res.status(200).json({ success: true, jobs, contracts });
//   } catch (error) {
//     console.error("Error fetching client dashboard data:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { getFreelancerDashboard, getClientDashboard };