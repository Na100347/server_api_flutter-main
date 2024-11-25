// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tourRoutes = require('./routes/tourRoutes'); // Import the routes
const topRoutes = require('./routes/topRoutes');
const bestRoutes = require('./routes/bestRoutes');
const top2Routes = require('./routes/top2Routes');
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 20 seconds timeout
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use the routes for handling requests
app.use('/api', tourRoutes); // Prefix all tour routes with /api
app.use('/api', topRoutes); // Prefix all tour routes with /api
app.use('/api', bestRoutes);
app.use('/api', top2Routes);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
