const express = require("express");
const app = express()
app.use=(express.json())
const tourRoutes = require("./route/tourRoute")

const tourController = require("./controller/tourController")

app.use("/api",tourRoutes)



app.listen(3000,()=>{
    console.log("Server is running");
})
