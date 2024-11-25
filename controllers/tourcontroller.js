// controllers/tourController.js
const Tour = require('../model/TourModel');

// Controller to handle GET request for tours
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTours
};
