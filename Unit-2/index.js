const express = require("express");

const app = express();

const tourRoutes = require("./route/tourRoute");
const userRoutes = require("./route/userRoute");

//Middlewares

// const middleware = (req, res, next) => {
//     console.log("Middleware executed");
//     next();
// }

// const middleware2 = (req, res, next) => {
//     console.log("Middleware 2 executed");
//     next();
// }

// const loggerMiddleware = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     console.log("Request Headers:", req.headers);
//     console.log("Request Body:", req.body);
//     next();
// }

// const checkage = (req, res, next) => {
//     const age = req.query.age;
//     if (age<18) {
//         return res.status(403).json({ error: "Age must be at least 18" });
//     }
//     else{
//         return res.status(200).json({ message: "Access Granted" });
//     }
//     next();
// };

// app.use(middleware);
// app.use(middleware2);
// app.use(loggerMiddleware);
// app.use(checkage);
app.use(express.json());

// Tour routes
app.use("/", tourRoutes);

// User routes
app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});