const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const boardRoutes = require("./modules/board/board.routes");
const taskRoutes = require("./modules/tasks/tasks.routes");
const errorHandler = require("./handler/errorHandler");

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

app.use(cors());
app.use(express.json());

// Models
require("./models/board.model");
require("./models/tasks.model");

// Routes
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

// End of all routes
app.all("*", (req, res, next) => {
    res.status(200).json({
        status: "failed",
        message: "Not found",
    });
});

app.use(errorHandler);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
