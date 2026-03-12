// couponController.js - Controller for handling coupon-related operations in the application

import Coupon from '../models/Coupon.js'; // Import the Coupon model to interact with the database

// 1. Get all UNUSED coupons for the homepage
const getAvailableCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({ isUsed: false }).sort({ createdAt: -1 }); // Fetch only unused coupons, sorted by newest first
    res.json(coupons); // Send the list of available coupons as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors that occur during the database query
  }
};

// 2. Mark a coupon as used (triggered when someone clicks 'Copy')
const claimCoupon = async (req, res) => {
  try {
    const { id } = req.params; // Get the coupon ID from the request parameters
    await Coupon.findByIdAndUpdate(id, { isUsed: true }); // Update the coupon's isUsed field to true, marking it as claimed
    res.json({ message: "Coupon claimed successfully!" }); // Send a success message as a JSON response
  } catch (err) {
    res.status(500).json({ message: "Error claiming coupon" }); // Handle any errors that occur during the update operation
  }
};

// 3. Add a new coupon (For your manual entry)
const addCoupon = async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body); // Create a new Coupon instance using the data sent in the request body
    await newCoupon.save(); // Save the new coupon to the database
    res.status(201).json(newCoupon); // Send the newly created coupon as a JSON response with a 201 status code
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle any errors that occur during the save operation, such as validation errors
  }
};

export default {getAvailableCoupons, claimCoupon, addCoupon};