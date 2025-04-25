const express = require("express");
const createBoard = require("./controller/createBoard");
const getBoard = require("./controller/getBoard");
const updateBoard = require("./controller/updateBoard");
const deleteBoard = require("./controller/deleteBoard");

const boardRoutes = express.Router();

// Routes
boardRoutes.post("/", createBoard);
boardRoutes.put("/", updateBoard);
boardRoutes.get("/:id", getBoard);
boardRoutes.delete("/:id", deleteBoard)

module.exports = boardRoutes;
