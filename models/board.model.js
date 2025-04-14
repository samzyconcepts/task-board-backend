const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
    
}, {
    timestamps: true,
});

const boardModel = mongoose.model("Board", boardSchema);

module.exports = boardModel;