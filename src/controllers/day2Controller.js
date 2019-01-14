const {getCheckSumForIds} = require('../services/day2Service.js');

exports.part1 = (req, res) => {
    const parsedIds = req.body.split('\n').filter((string) => string.length > 0);

    res.json(getCheckSumForIds(parsedIds));
};