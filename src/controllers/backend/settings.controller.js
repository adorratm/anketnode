/**
 * @file settings.controller.js
 * @description This file contains the settings controller.
 * @author https://github.com/adorratm
 */

// Importing the settings model
import settings from '../../models/settings.model.js';

// Importing the APIError
import APIError from '../../utils/errors.js';

// Importing the Response
import Response from '../../utils/response.js';

// Importing the auth middleware
import { tokenCheck } from '../../middlewares/backend/auth.js';

