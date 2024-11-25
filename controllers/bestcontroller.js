// controllers/tourController.js
const Best = require('../model/best');

// Controller to handle GET request for tours
const getbests = async (req, res) => {
  try {
    const bests = await Best.find();
    res.status(200).json(bests);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getbests
};
