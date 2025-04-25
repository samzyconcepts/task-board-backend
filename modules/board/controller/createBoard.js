const mongoose = require("mongoose");

const createBoard = async (req, res) => {
    const boardModel = mongoose.model("Board");
    const tasksModel = mongoose.model("Task");

    const defaultTask = [
        { name: "Task in Progress", status: "in-progress" },
        { name: "Task Completed", status: "completed" },
        { name: "Task Won't Do", status: "won't do" },
        {
            name: "Task To Do",
            description: "Work on a Challenge on devChallenges.io, learn Typescript.",
            status: "todo",
        },
    ];

    const board = new boardModel({
        name: "My Task Board",
        description: "Tasks to keep organised",
    });

    await board.save();

    const tasks = await tasksModel.insertMany(
        defaultTask.map((task) => ({
            ...task,
            boardId: board._id,
        }))
    );
    // Push the tasks to the board
    await board.updateOne({ $push: { tasks: { $each: tasks.map((t) => t._id) } } });

    res.status(201).json({
        status: "You just created a board",
    });
};

module.exports = createBoard;
