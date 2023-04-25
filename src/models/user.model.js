/**
 * @file user.model.js
 * @description This file is responsible for the user model.
 * @author https://github.com/adorratm
 */

// Importing the mongoose
import mongoose from "mongoose";

// Creating the schema
const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
        min_length: 2,
        max_length: 70,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        min_length: 2,
        max_length: 70,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    reset: {
        code: {
            type: String,
            default: null,
            trim: true
        },
        time: {
            type: String,
            default: null,
            trim: true
        }
    },
    is_active: {
        type: Boolean,
        required: true,
        trim: true,
        default: false // false = inactive, true = active 
    },
    verified: {
        type: Boolean,
        required: true,
        trim: true,
        default: false // false = not verified, true = verified
    }
}, { collection: "users", timestamps: true });

// Creating the model
const user = mongoose.model("users", schema);

// Exporting the model
export default user;