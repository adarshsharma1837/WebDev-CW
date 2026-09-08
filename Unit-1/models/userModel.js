const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/user.json");

// GET ALL USERS
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
};

// GET USER BY ID
const getById = (id) => {
    const users = getAll();

    return users.find((user) => user.id === id);
};

// ADD NEW USER
const add = (newUser) => {
    const users = getAll();

    users.push(newUser);

    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    return newUser;
};

// UPDATE USER
const update = (id, updatedUser) => {
    const users = getAll();

    const index = users.findIndex(
        (user) => user.id === id
    );

    if (index !== -1) {
        users[index] = {
            ...users[index],
            ...updatedUser
        };

        fs.writeFileSync(
            filePath,
            JSON.stringify(users, null, 2)
        );

        return users[index];
    }

    return {
        message: `User with ID ${id} not found`
    };
};

// DELETE USER
const deleteUser = (id) => {
    const users = getAll();

    const index = users.findIndex(
        (user) => user.id === id
    );

    if (index !== -1) {
        users.splice(index, 1);

        fs.writeFileSync(
            filePath,
            JSON.stringify(users, null, 2)
        );

        return {
            message: `User with ID ${id} has been deleted.`
        };
    }

    return {
        message: `User with ID ${id} not found.`
    };
};

// SEARCH USER BY NAME
const searchByName = (name) => {
    const users = getAll();

    return users.filter(
        (user) =>
            user.name.toLowerCase() === name.toLowerCase()
    );
};

// SEARCH USER BY EMAIL
const searchByEmail = (email) => {
    const users = getAll();

    return users.filter(
        (user) =>
            user.email.toLowerCase() === email.toLowerCase()
    );
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteUser,
    searchByName,
    searchByEmail
};