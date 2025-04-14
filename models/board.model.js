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

module.exports = mongoose.model("Board", boardSchema);