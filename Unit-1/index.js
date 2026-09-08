const express = require("express");

const app = express();

const tourRoutes = require("./route/tourRoute");

// Middleware
app.use(express.json());

// Routes
app.use("/", tourRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server is running");
});