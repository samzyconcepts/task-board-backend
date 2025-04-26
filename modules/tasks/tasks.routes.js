const express = require("express");
const updateTask = require("./controller/updateTask");
const deleteTask = require("./controller/deleteTask");
const createTask = require("./controller/createTask");

const taskRoutes = express.Router();

// Routes
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);
taskRoutes.post("/", createTask );

module.exports = taskRoutes;
