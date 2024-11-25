// controllers/tourController.js
const Top2 = require('../model/top2');

// Controller to handle GET request for tours
const getTop2s = async (req, res) => {
  try {
    const top2s = await Top2.find();
    res.status(200).json(top2s);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTop2s
};
