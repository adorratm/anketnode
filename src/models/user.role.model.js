/**
 * @file user.role.model.js
 * @description This file is responsible for the user role model.
 * @author https://github.com/adorratm
 */

// Importing the mongoose
import mongoose from "mongoose";

// Creating the schema
const schema = new mongoose.Schema({
    role_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true,
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true,
    }
}, { collection: "user_roles", timestamps: true, versionKey: false });

// Creating the model
const user_roles = mongoose.model("user_roles", schema);

// Exporting the model
export default user_roles;