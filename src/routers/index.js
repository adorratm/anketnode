/**
 * @file index.js
 * @description This file is responsible for the routes.
 * @author https://github.com/adorratm
 */

// Importing the express router
import express from 'express';
const router = express.Router();

// Importing the multer
import multer from 'multer';

// Importing the auth routes
import auth from './frontend/auth.routes.js';

// Importing the admin routes
import adminAuth from './backend/auth.routes.js';

// Importing the upload middleware
import upload from '../middlewares/lib/upload.js';
import APIError from '../utils/errors.js';
import Response from '../utils/response.js';

// Importing the path
import path from 'path';

// Importing the sharp
import sharp from 'sharp';

// Importing the fs
import fs from 'fs';

// Using the auth routes
router.use(auth);

// Using the admin routes
router.use('/panel', adminAuth);

// Creating the upload route
router.post('/upload', async (req, res) => {
    // Uploading the file
    upload(req, res, async (err) => {
        // Checking for multer errors
        if (err instanceof multer.MulterError) {
            // Sending the error
            throw new APIError(err.message, 400);
        }

        // Checking for errors
        if (err) {
            // Sending the error
            throw new APIError(err.message, 400);
        }

        // Getting the root directory
        const rootDir = path.join(path.dirname(require.main.filename), '/public/uploads');

        // Converting the images to webp
        req.files.forEach((file, i) => {
            // Converting the image to webp
            sharp(file.path).webp({ quality: 70 }).toFile(rootDir + '/' + file.filename.split('.')[0] + '.webp').then(() => {
                // Deleting the original image
                fs.unlinkSync(file.path);
            })
            // Adding the webp image to the saved images
            req.savedImages[i] = file.filename.split('.')[0] + '.webp';
        })

        // Sending the response
        return new Response(req.savedImages, "Image upload successfully.").success(res);
    });
});

// Exporting the routes
export default router;