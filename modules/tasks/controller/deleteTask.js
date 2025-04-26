const mongoose = require("mongoose");

const deleteTask = async (req, res) => {
    const taskModel = mongoose.model("Task");
    const { id } = req.params;

    const task = await taskModel.findByIdAndDelete(id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = deleteTask;
