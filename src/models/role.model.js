/**
 * @file role.model.js
 * @description This file is responsible for the role model.
 * @author https://github.com/adorratm
 */

// Importing the mongoose
import mongoose from "mongoose";

// Creating the role schema
const roleSchema = new mongoose.Schema({
    role_name: {
        type: String,
        required: true,
        trim: true,
    },
    is_active: {
        type: Boolean,
        required: true,
        trim: true,
        default: true // false = inactive, true = active 
    },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
}, { collection: "roles", timestamps: true, versionKey: false });

// Creating the role model
const roles = mongoose.model("roles", roleSchema);

// Exporting the model
export default roles;