const validateInputFormat = (req, res, next) => {
    const inputData = req.body;

    if (typeof inputData !== 'object' || inputData === null) {
        return res.status(400).json({ error: "Input data must be an object" });
    }

    const allowedKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (const key in inputData) {
        if (!allowedKeys.includes(key)) {
            return res.status(400).json({ error: `Key "${key}" is not allowed in input data` });
        }
    }

    next(); 
};

module.exports = validateInputFormat;