/**
 * @file user.model.js
 * @description This file is responsible for the user model.
 * @author https://github.com/adorratm
 */

// Importing the mongoose
import mongoose from "mongoose";

// Creating the user schema
const userSchema = new mongoose.Schema({
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
    role: {
        type: Number,
        required: true,
        trim: true,
        default: 1 // 1 = user, 2 = moderator, 3 = admin, 4 = super admin
    },
    permissions: {
        type: Object,
        required: true,
        trim: true,
        default: {}
    },
    status: {
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

// Creating the user model
const user = mongoose.model("users", userSchema);

// Exporting the model
export default user;