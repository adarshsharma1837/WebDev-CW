const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tour.json");

// GET ALL TOURS
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
};

// GET TOUR BY ID
const getById = (id) => {
    const tours = getAll();

    return tours.find((tour) => tour.id === id);
};

// ADD NEW TOUR
const add = (newTour) => {
    const tours = getAll();

    tours.push(newTour);

    fs.writeFileSync(
        filePath,
        JSON.stringify(tours, null, 2)
    );

    return newTour;
};

// UPDATE TOUR
const update = (id, updatedTour) => {
    const tours = getAll();

    const index = tours.findIndex(
        (tour) => tour.id === id
    );

    if (index !== -1) {
        tours[index] = {
            ...tours[index],
            ...updatedTour
        };

        fs.writeFileSync(
            filePath,
            JSON.stringify(tours, null, 2)
        );

        return tours[index];
    }

    return {
        message: `Tour with ID ${id} not found`
    };
};

// DELETE TOUR
const deleteTour = (id) => {
    const tours = getAll();

    const index = tours.findIndex(
        (tour) => tour.id === id
    );

    if (index !== -1) {
        tours.splice(index, 1);

        fs.writeFileSync(
            filePath,
            JSON.stringify(tours, null, 2)
        );

        return {
            message: `Tour with ID ${id} has been deleted.`
        };
    }

    return {
        message: `Tour with ID ${id} not found.`
    };
};

// SEARCH BY DESTINATION
const searchTourbydestination = (destination) => {
    const tours = getAll();

    return tours.filter(
        (tour) =>
            tour.destination.toLowerCase() ===
            destination.toLowerCase()
    );
};

// SEARCH BY PRICE RANGE
const searchBypricerange = (minPrice, maxPrice) => {
    const tours = getAll();

    return tours.filter(
        (tour) =>
            tour.price >= minPrice &&
            tour.price <= maxPrice
    );
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteTour,
    searchTourbydestination,
    searchBypricerange
};