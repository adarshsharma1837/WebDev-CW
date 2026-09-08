const tourModel = require("../models/tourModel");

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();

    res.json(tours);
};

// Get tour by ID
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);

    const tour = tourModel.getById(id);

    res.json(tour);
};

// Add a new tour
const addTour = (req, res) => {
    const newTour = req.body;

    const addedTour = tourModel.add(newTour);

    res.json(addedTour);
};

// Update a tour
const updateTour = (req, res) => {
    const id = parseInt(req.params.id);

    const updatedTour = req.body;

    const tour = tourModel.update(id, updatedTour);

    res.json(tour);
};

// Delete a tour
const deleteTour = (req, res) => {
    const id = parseInt(req.params.id);

    const result = tourModel.deleteTour(id);

    res.json(result);
};

// Search tour by destination
const searchTour = (req, res) => {
    const destination = req.query.destination;

    const tours = tourModel.searchTourbydestination(destination);

    res.json(tours);
};

// Search tour by price range
const searchByPriceRange = (req, res) => {
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);

    const tours = tourModel.searchBypricerange(
        minPrice,
        maxPrice
    );

    res.json(tours);
};

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    updateTour,
    deleteTour,
    searchTour,
    searchByPriceRange
};