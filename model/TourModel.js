const mongoose = require("mongoose");

// Schema for destinations within a tour
const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "Unknown Destination" }, // Default value if destination name is not provided
  description: { type: String, default: "" }, // Optional description for the destination
  duration: { type: Number, default: 0 }, // Duration in days
});

// Schema for the tour
const tourSchema = new mongoose.Schema({
  tour_id: { type: String, required: true }, // Unique identifier for the tour
  name: { type: String, required: true, default: "Unknown Tour" }, // Default name for the tour
  description: { type: String, default: "" }, // Optional description of the tour
  image_url: { type: String, default: "" }, // URL for the tour cover image
  destinations: { type: [destinationSchema], default: [] }, // List of destinations, default empty if none
});

// Creating the model for Tour
const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
