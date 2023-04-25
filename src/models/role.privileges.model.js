/**
 * @file role.privileges.model.js
 * @description This file is responsible for the role privileges model.
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
    permission: {
        type: String,
        required: true,
        trim: true,
    },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true
    }
}, { collection: "role_privileges", timestamps: true, versionKey: false });

// Creating the model
const role_privileges = mongoose.model("role_privileges", schema);

// Exporting the model
export default role_privileges;