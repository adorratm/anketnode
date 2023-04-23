/**
 * @file auth.js
 * @description This file contains the auth middleware.
 * @author https://github.com/adorratm
 */

// Importing the jwt
import jwt from 'jsonwebtoken';

// Importing the user model
import user from '../../models/user.model.js';

// Importing the APIError
import APIError from '../../utils/errors.js';

// Creating the token
const createToken = async (user, res) => {

    // Creating the payload
    const payload = {
        sub: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    };

    // Creating the token
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        algorithm: 'HS512', // Algorithm used to sign the token
        expiresIn: process.env.JWT_EXPIRES_IN // 1 day
    });

    // Sending the token
    return res.status(201).send({
        success: true,
        token,
        message: res.__("middlewares.backend.auth.createToken.loginSuccessfully")
    });
}

// Checking the token
const tokenCheck = async (req, res, next) => {

    // Getting the token
    const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer ') && req.headers.authorization.split(' ')[1];

    // Checking if the token exists
    if (!token) {
        throw new APIError(res.__("middlewares.backend.auth.tokenCheck.noTokenProvided"), 401);
    }
    // Checking if the token is valid
    await jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {

        // If the token is invalid, throw an error
        if (err) {
            throw new APIError(res.__("middlewares.backend.auth.tokenCheck.tokenUnauthorized"), 401);
        }

        // Getting the user info
        const userInfo = await user.findById(decoded.sub).select("_id first_name last_name email");

        // Checking if the user exists
        if (!userInfo) {
            throw new APIError(res.__("middlewares.backend.auth.tokenCheck.userNotFound"), 401);
        }

        // Setting the user info
        req.user = userInfo;

        // Calling the next middleware
        next();
    });
}

// Creating the temporary token
const createTemporaryToken = async (userId, email) => {

    // Creating the payload
    const payload = {
        sub: userId,
        email
    };

    // Creating the token
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        algorithm: 'HS512', // Algorithm used to sign the token
        expiresIn: process.env.JWT_TEMPORARY_EXPIRES_IN // 15 minutes
    });

    // Returning the token
    return "Bearer " + token;
}

// Decoding the temporary token 
const decodedTemporaryToken = async (temporaryToken, res) => {
    const token = temporaryToken && temporaryToken.startsWith('Bearer ') && temporaryToken.split(' ')[1];

    // Checking if the token exists
    if (!token) {
        throw new APIError(res.__("middlewares.backend.auth.decodedTemporaryToken.noTokenProvided"), 401);
    }

    // Checking if the token is valid
    await jwt.verify(token, process.env.JWT_TEMPORARY_SECRET_KEY, async (err, decoded) => {

        // If the token is invalid, throw an error
        if (err) {
            throw new APIError(res.__("middlewares.backend.auth.decodedTemporaryToken.tokenUnauthorized"), 401);
        }

        const userInfo = await user.findById(decoded.sub).select("_id first_name last_name email");

        // Checking if the user exists
        if (!userInfo) {
            throw new APIError(res.__("middlewares.backend.auth.decodedTemporaryToken.userNotFound"), 401);
        }

        // Returning the user info
        return userInfo;
    });
}

// Exporting the module
export { createToken, tokenCheck, createTemporaryToken, decodedTemporaryToken }