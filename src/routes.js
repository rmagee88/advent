const day1 = require('./controllers/day1Controller');

module.exports = (app) => {
    app.route('/')
        .get((req, res) => {
            return res.send('sababa');
        });

    app.route('/day1.1')
        .post(day1.part1);

    app.route('/day1.2')
        .post(day1.part2);
};