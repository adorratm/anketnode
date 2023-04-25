/**
 * @file auth.js
 * @description This file is responsible for the auth routes.
 * @author https://github.com/adorratm
 */

// Importing the express router
import express from 'express';
const router = express.Router();

// Importing the auth controller
import { login, register, me, forgotPassword, resetCodeCheck, resetPassword } from '../../controllers/backend/auth.controller.js';

// Importing the auth validation
import authValidation from '../../middlewares/validations/auth.validation.js';

// Token check
import { tokenCheck } from '../../middlewares/frontend/auth.js';

// Creating the routes

// Login
router.post('/login', authValidation.login, login);

// Register
router.post('/register', authValidation.register, register);

// Getting the user data
router.get('/me', tokenCheck, me);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset code check
router.post('/reset-code-check', resetCodeCheck);

// Reset password
router.post('/reset-password', resetPassword);

// Exporting the routes
export default router;