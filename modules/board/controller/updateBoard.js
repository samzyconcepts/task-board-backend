const mongoose = require("mongoose");

const updateBoard = async (req, res) => {
    const boardModel = mongoose.model("Board");

    const { id, name, description } = req.body;

    const board = await boardModel.findByIdAndUpdate(
        id,
        {
            name,
            description,
        },
        { new: true }
    );

    res.status(200).json({
        status: "success",
        data: {
            board,
        },
    });
};

module.exports = updateBoard;