/**
 * @file rateLimit.js
 * @description This file is responsible for the rate limit.
 * @author https://github.com/adorratm
 */

// Importing the rate limit
import rateLimit from 'express-rate-limit';

// Creating the allowed list
const allowedList = ['::1'];

// Creating the rate limit
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: (req, res) => {
        // Checking for the URL
        if (req.url === '/login' || req.url === '/register') {
            // Returning the limit
            return 5;
        } else {
            // Returning the limit
            return 100;
        }
    }, // limit each IP to 100 requests per windowMs
    message: (req, res) => {
        return res.__("middlewares.rateLimit.tooManyRequests"); // Return the message
    },
    skip: (req, res) => allowedList.includes(req.ip), // Skipping the allowed list
    standardHeaders: true, // Enable the standard rate limit headers
    legacyHeaders: false // Disable the legacy rate limit headers
});

// Exporting the rate limit
export default apiLimiter;