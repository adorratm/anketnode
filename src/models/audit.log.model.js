/**
 * @file audit.log.model.js
 * @description This file is responsible for the audit log model.
 * @author https://github.com/adorratm
 */

// Importing the mongoose
import mongoose from "mongoose";

// Creating the schema
const schema = new mongoose.Schema({
    level: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    proc_type: {
        type: String,
        trim: true,
    },
    log:{
        type: String,
        trim: true,
    }
}, { collection: "audit_logs", timestamps: true, versionKey: false });

// Creating the model
const audit_logs = mongoose.model("audit_logs", schema);

// Exporting the model
export default audit_logs;