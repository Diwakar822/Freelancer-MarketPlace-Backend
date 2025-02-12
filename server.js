const app = require("./app"); // Import the Express app from app.js
const dotenv = require("dotenv");


dotenv.config();

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});