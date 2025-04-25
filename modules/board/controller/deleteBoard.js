const mongoose = require("mongoose")

const deleteBoard = async (req, res) => {
    const boardModel = mongoose.model("Board")

    const { id } = req.params

    const board = await boardModel.findByIdAndDelete(id)

    if (!board) {
        return res.status(404).json({
            status: "error",
            message: "Board not found",
        })
    }

    res.status(200).json({
        status: "success",
        message: "Board deleted successfully",
    })
};

module.exports = deleteBoard