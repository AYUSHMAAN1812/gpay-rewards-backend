import express from 'express'; // Import the Express library to create a router for handling stats-related routes
import statsController from '../controllers/statsControllers.js'; // Import the stats controller to handle business logic for stats-related operations

const router = express.Router(); // Create a new router instance to define routes related to stats

// GET /api/stats -> Returns the number of visitors
router.get('/', statsController.getVisits);

// POST /api/stats/hit -> Increments the visitor count
router.post('/hit', statsController.incrementVisits);

export default router; // Export the router to be used in the main application file (e.g., app.js) to handle stats-related API endpoints