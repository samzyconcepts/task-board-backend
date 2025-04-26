const mongoose = require("mongoose");

const createTask = async (req, res) => {
    const boardModel = mongoose.model("Board");
    const taskModel = mongoose.model("Task");

    const { title, description, status, icon, boardId } = req.body;

    const board = await boardModel.findById(boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }

    const task = await taskModel.create({
        name: title,
        description,
        status,
        icon,
        boardId,
    });

    if (!task) {
        return res.status(400).json({ message: "Task creation failed" });
    }

    // Add the task to the board's tasks array
    board.tasks.push(task._id);
    await board.save();

    res.status(201).json(task);
};

module.exports = createTask;
