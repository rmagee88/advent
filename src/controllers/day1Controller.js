const {reduce, findFirstRepeatedSum} = require('../services/day1Service.js');
const parseNumbers = (body) => {
    const stringNumbers = body.split('\n');
    return stringNumbers.map((stringNum) => {
        return Number.parseInt(stringNum);
    }).filter((parsedNumber) => {
        return Number.isInteger(parsedNumber);
    });
};

exports.part1 = (req, res) => {
    const parsedNumbers = parseNumbers(req.body);

    res.json(reduce(parsedNumbers));
};

exports.part2 = (req, res) => {
    const parsedNumbers = parseNumbers(req.body);

    res.json(findFirstRepeatedSum(parsedNumbers));
};