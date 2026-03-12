// db.js - Database connection setup using Mongoose for MongoDB in the application

import mongoose from 'mongoose'; // Import the Mongoose library to interact with MongoDB

// Function to connect to the MongoDB database using the connection string from environment variables
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Connect to the MongoDB database using the connection string specified in the environment variable MONGO_URI
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log a success message to the console with the host of the connected database
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log any errors that occur during the connection attempt to the console
    process.exit(1); // Stop the server if the database fails
  }
};

export default connectDB; // Export the connectDB function to be used in other parts of the application (e.g., app.js) to establish a connection to the database when the server starts