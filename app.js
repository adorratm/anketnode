/**
 * @file app.js
 * @description This file contains the main app.
 * @author https://github.com/adorratm
 */

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
import "dotenv/config.js";

// Express Async Errors is a middleware that wraps the route handlers and makes sure any errors they throw are passed to the express error handler.
import "express-async-errors";

// Express
import express from "express";

// Express App
const app = express();

// DB Connection 
import "./src/db/dbConnection.js";

// Port
const port = process.env.PORT || 5000;

// Routers
import router from "./src/routers/index.js";

// Error Handler
import errorHandlerMiddleware from "./src/middlewares/errorHandler.js";

// Cors
import cors from "cors";

// Cors Options
import corsOptions from "./src/helpers/corsOptions.js";

// Express Mongo Sanitize
import mongoSanitize from "express-mongo-sanitize";

// Helmet
import helmet from "helmet";

// Hpp
import hpp from "hpp";

// Api Rate Limiter
import apiLimiter from "./src/middlewares/rateLimit.js";

// Moment
import moment from "moment-timezone";

// Set default timezone
moment.tz.setDefault("Europe/Istanbul");

// Path
import path from "path";

const __dirname = path.dirname("/public");

// i18n
import i18n from "i18n";

i18n.configure({
    locales: ['tr'],
    defaultLocale: "tr",
    directory: path.join('./src/', 'locales'),
    objectNotation:true,
    autoReload: true,
    updateFiles:true,
    syncFiles:true
});

// Middlewares
app.use(i18n.init);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use("/api", apiLimiter)

app.use(mongoSanitize({
    replaceWith: '_'
}));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(__dirname));

app.use(helmet());
app.use(hpp());

// Routes
app.use("/api", router);

// Error Handler Middleware
app.use(errorHandlerMiddleware)

// Server Start
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});