// Stats.js - Mongoose model for tracking homepage visit statistics in the application

import mongoose from 'mongoose'; // Ensure you have mongoose installed and imported

// Define the Stats schema
const statsSchema = new mongoose.Schema({
  totalVisits: { type: Number, default: 0 } // A field to track the total number of visits to the homepage
});

export default mongoose.model('Stats', statsSchema); // Export the Stats model for use in other parts of the application