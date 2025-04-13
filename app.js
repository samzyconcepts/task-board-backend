const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.all("*", (req, res, next) => {
    res.status(200).json({
        status: "failed",
        message: "Not found",
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
