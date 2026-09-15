const userModel = require("../models/userModel");

// GET ALL USERS
const getAllUsers = (req, res) => {
    const users = userModel.getAll();

    res.json(users);
};

// GET USER BY ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = userModel.getById(id);

    res.json(user);
};

// ADD NEW USER
const addUser = (req, res) => {
    const newUser = req.body;

    const addedUser = userModel.add(newUser);

    res.json(addedUser);
};

// UPDATE USER
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const updatedUser = req.body;

    const user = userModel.update(id, updatedUser);

    res.json(user);
};

// DELETE USER
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    const result = userModel.deleteUser(id);

    res.json(result);
};

// SEARCH USER BY NAME
const searchByName = (req, res) => {
    const name = req.query.name;

    const users = userModel.searchByName(name);

    res.json(users);
};

// SEARCH USER BY EMAIL
const searchByEmail = (req, res) => {
    const email = req.query.email;

    const users = userModel.searchByEmail(email);

    res.json(users);
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    searchByName,
    searchByEmail
};