// statsControllers.js - Controller functions for handling stats-related API endpoints in the application

import Stats from '../models/Stats.js'; // Import the Stats model to interact with the stats collection in the database

// 1. Get the current visit count
const getVisits = async (req, res) => {
  try {
    let stats = await Stats.findOne(); // Find the first document in the Stats collection (there should only be one)
    if (!stats) { // If no stats document exists, create one with totalVisits initialized to 0
      stats = await Stats.create({ totalVisits: 0 }); // Create a new stats document with totalVisits set to 0 if it doesn't exist
    }
    res.json({ count: stats.totalVisits }); // Send the totalVisits count as a JSON response
  } catch (err) {
    res.status(500).json({ message: "Error fetching stats" }); // Handle any errors that occur during the database query and respond with a 500 status code and an error message
  }
};

// 2. Increment the visit count (Triggered on page load)
const incrementVisits = async (req, res) => {
  try {
    // Finds the first document and adds 1 to totalVisits
    const stats = await Stats.findOneAndUpdate( // Find the first document in the Stats collection
      {}, // No filter, we just want the first document
      { $inc: { totalVisits: 1 } }, // Increment the totalVisits field by 1
      { upsert: true, new: true } // If no document exists, create one (upsert: true) and return the updated document (new: true)
    );
    res.json({ count: stats.totalVisits }); // Send the updated totalVisits count as a JSON response
  } catch (err) {
    res.status(500).json({ message: "Error updating stats" }); // Handle any errors that occur during the update operation and respond with a 500 status code and an error message
  }
};

export default { getVisits, incrementVisits }; // Export the controller functions to be used in the stats routes for handling API requests related to stats operations