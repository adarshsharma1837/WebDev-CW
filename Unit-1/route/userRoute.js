const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

// GET ALL USERS
router.get("/user", userController.getAllUsers);

// SEARCH USER BY NAME
router.get("/user/search", userController.searchByName);

// SEARCH USER BY EMAIL
router.get("/user/searchByEmail", userController.searchByEmail);

// GET USER BY ID
router.get("/user/:id", userController.getUserById);

// ADD USER
router.post("/user", userController.addUser);

// UPDATE USER
router.put("/user/:id", userController.updateUser);

// DELETE USER
router.delete("/user/:id", userController.deleteUser);

module.exports = router;