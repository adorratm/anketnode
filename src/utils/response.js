/**
 * @file response.js
 * @description This file is responsible for the Response class.
 * @author https://github.com/adorratm
 */

// Creating the Response class
class Response {
    // Creating the constructor
    constructor(data = null, message = null) {
        // Setting the data
        this.data = data;
        // Setting the message
        this.message = message;
    }

    // Success method
    success(res) {
        // Returning the response
        return res.status(200).send({ success: true, data: this.data, message: this.message ?? res.__("utils.response.success") });
    }

    // Created method
    created(res) {
        // Returning the response
        return res.status(201).send({ success: true, data: this.data, message: this.message ?? res.__("utils.response.created") });
    }

    // Error 400 method
    error400(res) {
        // Returning the response
        return res.status(400).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error400") });
    }

    // Error 401 method
    error401(res) {
        // Returning the response
        return res.status(401).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error401") });
    }

    // Error 403 method
    error403(res) {
        // Returning the response
        return res.status(403).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error403") });
    }

    // Error 404 method
    error404(res) {
        // Returning the response
        return res.status(404).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error404") });
    }

    // Error 429 method
    error429(res) {
        // Returning the response
        return res.status(429).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error429") });
    }

    // Error 500 method
    error500(res) {
        // Returning the response
        return res.status(500).send({ success: false, data: this.data, message: this.message ?? res.__("utils.response.error500") });
    }
}

// Exporting the Response class
export default Response;