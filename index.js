import express from 'express'; // Import the Express library to create the server and define routes
import cors from 'cors'; // Import the CORS middleware to allow cross-origin requests from the frontend
import dotenv from 'dotenv'; // Import the dotenv library to load environment variables from a .env file
import connectDB from './config/db.js'; // Import the function to connect to the MongoDB database
import couponRoutes from './routes/couponRoutes.js'; // Import the coupon routes to handle coupon-related API endpoints
import statsRoutes from './routes/statsRoutes.js'; // Import the stats routes to handle stats-related API endpoints
// 1. Load Environment Variables
dotenv.config(); // Load environment variables from the .env file into process.env so they can be accessed throughout the application

// 2. Connect to MongoDB
connectDB(); // Establish a connection to the MongoDB database using the connection string specified in the environment variables

const app = express(); // Create an instance of the Express application to set up the server and define routes

// 3. Middlewares
app.use(cors()); // Allows your Next.js app to make requests to this API
app.use(express.json()); // Parses incoming JSON requests

// 4. Routes
app.use('/api/coupons', couponRoutes); // Use the coupon routes for any requests to /api/coupons
app.use('/api/stats', statsRoutes); // Use the stats routes for any requests to /api/stats
app.use(cors({
  origin: "*", // Or your future live URL
  methods: ['GET', 'POST', 'PATCH'],
  allowedHeaders: ['Content-Type', 'x-admin-password'] // Important!
})); // CORS configuration to allow requests from the frontend, specifying allowed methods and headers (including the custom header for admin authentication)
// 5. Basic Health Check (Optional)
app.get('/', (req, res) => {
  res.send('Reward Sharing API is running...'); // A simple route to check if the server is up and running, responding with a message when the root URL is accessed
});

// 6. Start Server
const PORT = process.env.PORT || 5000; // Get the port from environment variables or default to 5000 if not specified
app.listen(PORT, () => { // Start the server and listen on the specified port, logging a message to the console when the server is running
  console.log(`Server is humming along on port ${PORT}`); // Log a message to the console indicating that the server is running and on which port it is listening
});