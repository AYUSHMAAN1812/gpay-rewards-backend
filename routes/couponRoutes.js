// couponRoutes.js - Express router for handling coupon-related API endpoints in the application

import express from 'express'; // Import the Express framework to create a router
import couponController from '../controllers/couponController.js'; // Import the coupon controller to handle business logic for coupons
import adminAuth from '../middleware/auth.js'; // Import the admin authentication middleware to protect certain routes

const router = express.Router(); // Create a new router instance to define routes related to coupons

router.get('/', couponController.getAvailableCoupons); // Route to get all available (unused) coupons for the homepage
router.patch('/claim/:id', couponController.claimCoupon); // Route to mark a coupon as claimed (used) when someone clicks 'Copy'
router.post('/add', adminAuth, couponController.addCoupon); // Protected by your secret password

export default router; // Export the router to be used in the main application file (e.g., app.js)