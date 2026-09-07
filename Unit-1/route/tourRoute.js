const express = require("express")
const app = express()
app.use(express.json())
const router = express.Router()


const tourController = require("../controller/tourController")


// 
router.get("/tour",tourController.getAllTours)
router.get("/tour/search",tourController.searchTour)
router.get("/tour/searchByPriceRange",tourController.searchByPriceRange)
router.get("/tour/:id",tourController.getTourById)
router.post("/tour",tourController.addTour)
router.put("/tour/:id",tourController.updateTour)
router.delete("/tour/:id",tourController.deleteTour)
router.get("/tour/searchByPriceRange",tourController.searchByPriceRange)

module.exports = router

