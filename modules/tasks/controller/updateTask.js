const mongoose = require("mongoose");

const updateTask = async (req, res) => {
    const taskModel = mongoose.model("Task");
    const { id } = req.params;
    const { title, description, status, icon } = req.body;

    const task = await taskModel.findByIdAndUpdate(
        id,
        { title, description, status, icon },
        { new: true }
    );

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
};

module.exports = updateTask;
