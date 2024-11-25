// controllers/tourController.js
const Top = require('../model/Top');

// Controller to handle GET request for tours
const getTops = async (req, res) => {
  try {
    const tops = await Top.find();
    res.status(200).json(tops);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTops
};
