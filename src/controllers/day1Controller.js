const {reduce, findFirstRepeatedSum} = require('../services/day1Service.js');
const {parseNumbers} = require('../utils/utils.js');

exports.part1 = (req, res) => {
    const parsedNumbers = parseNumbers(req.body);

    res.json(reduce(parsedNumbers));
};

exports.part2 = (req, res) => {
    const parsedNumbers = parseNumbers(req.body);

    res.json(findFirstRepeatedSum(parsedNumbers));
};