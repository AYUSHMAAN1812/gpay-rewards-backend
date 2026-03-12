// Coupon.js - Mongoose model for coupons in the application

import mongoose from 'mongoose'; // Ensure you have mongoose installed and imported

// Define the Coupon schema
const couponSchema = new mongoose.Schema({
  brand: { type: String, required: true }, // The brand associated with the coupon
  code: { type: String, required: true }, // The unique code for the coupon
  details: { type: String }, // Additional details about the coupon
  expiryDate: { type: Date }, // The date when the coupon expires
  isUsed: { type: Boolean, default: false }, // Crucial for your "auto-remove" logic
  createdAt: { type: Date, default: Date.now } // Timestamp for when the coupon was created
});

export default mongoose.model('Coupon', couponSchema); // Export the Coupon model for use in other parts of the application