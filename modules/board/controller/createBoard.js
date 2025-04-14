const createBoard = async (req, res) => {
    res.status(200).json({
        status: "You just created a board",
    });
};

module.exports = createBoard;
