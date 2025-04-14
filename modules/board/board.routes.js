const express = require("express");
const createBoard = require("./controller/createBoard");

const boardRoutes = express.Router();

// Routes
boardRoutes.post("/", createBoard);

module.exports = boardRoutes;
