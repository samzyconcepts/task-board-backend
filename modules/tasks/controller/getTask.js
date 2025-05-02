const mongoose = require("mongoose");

const getTask = async (req, res) => {
    const taskModel = mongoose.model("Task");
    const { id } = req.params;

    const task = await taskModel.findById(id);

    if (!task) {
        return res.status(404).json({
            status: "error",
            message: "No task found",
        });
    }

    res.status(200).json({
        status: "success",
        task,
    });
};

module.exports = getTask;
