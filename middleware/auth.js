// auth.js - Middleware for admin authentication in the application

// This middleware checks for a custom header 'x-admin-password' in the incoming request and compares it to a predefined password stored in environment variables. If the password matches, the request is allowed to proceed; otherwise, it responds with an unauthorized error.
const adminAuth = (req, res, next) => {
  const password = req.headers['x-admin-password']; // Extract the password from the custom header
  if (password === process.env.ADMIN_PASSWORD) { // Compare the provided password with the one stored in environment variables
    next(); // Passwords match, proceed to add the coupon
  } else {
    res.status(401).json({ message: "Unauthorized: Incorrect Password" }); // Passwords do not match, respond with an unauthorized error
  }
};

export default adminAuth; // Export the adminAuth middleware for use in other parts of the application