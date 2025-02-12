const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
// const freelancerRoutes = require("./routes/freelancerRoutes");
// const clientRoutes = require("./routes/clientRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const searchRoutes = require("./routes/searchRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");
const jobRoutes = require('./routes/jobRoutes');
const contractRoute = require('./routes/contractRoute')
const profileRoutes = require('./routes/profileRoutes');
const servicesRoutes = require('./routes/servicesRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
// app.use("/api/freelancer", freelancerRoutes); // Freelancer routes
// app.use("/api/client", clientRoutes); // Client routes
app.use("/api/payment", paymentRoutes); // Payment routes
app.use("/api/reviews", reviewRoutes); // Review routes
app.use("/api/notifications", notificationRoutes); // Notification routes
app.use("/api/search", searchRoutes); // Search and filtering routes
// app.use("/api/dashboard", dashboardRoutes); // Dashboard routes
app.use('/api/jobs', jobRoutes);
app.use('/api/contract', contractRoute)
app.use('/api/profile', profileRoutes);
app.use('/api/services', servicesRoutes);


// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Freelance Marketplace API!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Export the app for server.js
module.exports = app;