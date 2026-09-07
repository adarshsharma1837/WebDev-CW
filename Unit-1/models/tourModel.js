const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname,"../data/tour.json");


// GET ALL
const getAll = ()=>{
    const data = fs.readFileSync(filePath,"utf-8")
    return JSON.parse(data)
}

// GET BY ID
const getById = (id)=>{
    const tours = getAllTours();
    return tours.find((tours)=>tour.id === id)
}

// Add a new Tour
const add = (newTour)=>{
    const tours = getAllTours();
    tours.push(newTour);
    fs.writeFileSync(filePath,JSON.stringify(tours))
    return newTour
}

const update = (id, updatedTour)=>{
    const tours = getAllTours();
    const index = tours.findIndex((tour)=>tour.id === id);  
    if (index !== -1) {
        tours[index] = { ...tours[index], ...updatedTour };
        fs.writeFileSync(filePath, JSON.stringify(tours));
        return tours[index];  }
    return updatedTour;

};

const deleteTour = (id)=>{
    const tours = getAllTours();
    const index = tours.findIndex((tour)=>tour.id === id);
    if (index !== -1) {
        tours.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(tours));
    }
    return { message: `Tour with ID ${id} has been deleted.` };
}

const searchTourbydestination = (destination)=>{
    const tours = getAllTours();
    return tours.filter((tour)=>tour.destination.toLowerCase() === destination.toLowerCase())
}

const searchBypricerange = (minPrice, maxPrice)=>{
    const tours = getAllTours();
    return tours.filter((tour)=>tour.price >= minPrice && tour.price <= maxPrice)
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteTour,
    searchTourbydestination

}