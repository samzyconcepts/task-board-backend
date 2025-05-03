const mongoose = require("mongoose");

const createBoard = async (req, res) => {
    const boardModel = mongoose.model("Board");
    const tasksModel = mongoose.model("Task");

    const defaultTask = [
        { name: "Task in Progress", status: "in-progress", icon:"clock" },
        { name: "Task Completed", status: "completed", icon: "dumbbell" },
        { name: "Task Won't Do", status: "won't do", icon: "teacup" },
        {
            name: "Task To Do",
            description: "Work on a Challenge on devChallenges.io, learn Typescript.",
            status: "todo",
            icon: "books"
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

    await board.save();

    res.status(201).json({
        status: "success",
        id: board._id,
    });
};

module.exports = createBoard;
