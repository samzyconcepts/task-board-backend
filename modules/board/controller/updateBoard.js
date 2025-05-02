const mongoose = require("mongoose");

const updateBoard = async (req, res) => {
    const boardModel = mongoose.model("Board");

    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            status: "error",
            message: "Board ID is required",
        });
    }
    const { name, description } = req.body;

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
