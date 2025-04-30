const mongoose = require("mongoose");

const getBoard = async (req, res) => {
    const boardModel = mongoose.model("Board");

    const { id } = req.params;

    const board = await boardModel.findById(id).populate("tasks");

    if (!board) {
        return res.status(404).json({
            status: "error",
            message: "Board not found",
        });
    }

    res.status(200).json({
        status: "success",
        board,
    });
};

module.exports = getBoard;
