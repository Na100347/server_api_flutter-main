const mongoose = require("mongoose");

// Schema for the tour
const tourtop2 = new mongoose.Schema({
    tour_id: { type: String, required: true }, // Unique identifier for the tour
    name: { type: String, required: true, default: "Unknown Tour" }, // Default name for the tour
    description: { type: String, default: "" }, // Optional description of the tour
    image_url: { type: String, default: "" }, // URL for the tour cover image
    // destinations: { type: [destinationSchema], default: [] }, // List of destinations, default empty if none
  });

  const top2 = mongoose.model("top2", tourtop2);
module.exports = top2;
