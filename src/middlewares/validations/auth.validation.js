/**
 * @file auth.validation.js
 * @description This file contains the auth validation.
 * @author https://github.com/adorratm
 */

// Importing Joi
import joi from 'joi';

// APIError
import APIError from '../../utils/errors.js';

// Class for the auth validation
class authValidation {
    // Constructor
    constructor() { }

    // Register Validation
    static register = async (req, res, next) => {
        try {
            // Validating the request body
            await joi.object({
                first_name: joi.string().trim().min(2).max(70).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.register.firstName.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.register.firstName.empty"),
                    'string.min': res.__("middlewares.validations.authValidation.register.firstName.min"),
                    'string.max': res.__("middlewares.validations.authValidation.register.firstName.max"),
                    'string.required': res.__("middlewares.validations.authValidation.register.firstName.required")
                }),
                last_name: joi.string().trim().min(2).max(70).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.register.lastName.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.register.lastName.empty"),
                    'string.min': res.__("middlewares.validations.authValidation.register.lastName.min"),
                    'string.max': res.__("middlewares.validations.authValidation.register.lastName.max"),
                    'string.required': res.__("middlewares.validations.authValidation.register.lastName.required")
                }),
                email: joi.string().trim().email().min(2).max(255).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.register.email.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.register.email.empty"),
                    'string.email': res.__("middlewares.validations.authValidation.register.email.email"),
                    'string.min': res.__("middlewares.validations.authValidation.register.email.min"),
                    'string.max': res.__("middlewares.validations.authValidation.register.email.max"),
                    'string.required': res.__("middlewares.validations.authValidation.register.email.required")
                }),
                password: joi.string().trim().min(6).max(32).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.register.password.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.register.password.empty"),
                    'string.min': res.__("middlewares.validations.authValidation.register.password.min"),
                    'string.max': res.__("middlewares.validations.authValidation.register.password.max"),
                    'string.required': res.__("middlewares.validations.authValidation.register.password.required")
                })
            }).validateAsync(req.body);
        } catch (err) {
            // Returning the error
            throw new APIError(err.message, 400);
        }
        // Calling the next middleware
        next();
    }

    // Login Validation
    static login = async (req, res, next) => {
        try {
            // Validating the request body
            await joi.object({
                email: joi.string().trim().email().min(2).max(255).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.login.email.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.login.email.empty"),
                    'string.email': res.__("middlewares.validations.authValidation.login.email.email"),
                    'string.min': res.__("middlewares.validations.authValidation.login.email.min"),
                    'string.max': res.__("middlewares.validations.authValidation.login.email.max"),
                    'string.required': res.__("middlewares.validations.authValidation.login.email.required")
                }),
                password: joi.string().trim().min(6).max(32).required().messages({
                    'string.base': res.__("middlewares.validations.authValidation.login.password.base"),
                    'string.empty': res.__("middlewares.validations.authValidation.login.password.empty"),
                    'string.min': res.__("middlewares.validations.authValidation.login.password.min"),
                    'string.max': res.__("middlewares.validations.authValidation.login.password.max"),
                    'string.required': res.__("middlewares.validations.authValidation.login.password.required")
                })
            }).validateAsync(req.body);
        } catch (err) {
            // Returning the error
            throw new APIError(err.message, 400);
        }
        // Calling the next middleware
        next();
    }
}

// Exporting the auth validation
export default authValidation;