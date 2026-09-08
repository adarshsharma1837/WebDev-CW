const express = require("express");

const router = express.Router();

const tourController = require("../controller/tourController");

// Get all tours
router.get("/tour", tourController.getAllTours);

// Search tour by destination
router.get("/tour/search", tourController.searchTour);

// Search tour by price range
router.get(
    "/tour/searchByPriceRange",
    tourController.searchByPriceRange
);

// Get tour by ID
router.get("/tour/:id", tourController.getTourById);

// Add a new tour
router.post("/tour", tourController.addTour);

// Update a tour
router.put("/tour/:id", tourController.updateTour);

// Delete a tour
router.delete("/tour/:id", tourController.deleteTour);

module.exports = router;