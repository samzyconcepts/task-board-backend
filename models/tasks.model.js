const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["todo", "in-progress", "completed", "won't do"],
            default: "in-progress",
        },
        boardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required: true,
        },
    },
    { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
