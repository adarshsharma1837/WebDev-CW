const express = require("express");

const app = express();

const tourRoutes = require("./route/tourRoute");
const userRoutes = require("./route/userRoute");

app.use(express.json());

// Tour routes
app.use("/", tourRoutes);

// User routes
app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});