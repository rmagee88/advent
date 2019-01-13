const server = require('server')
const { get } = server.router;

const routes = {
    home: get('/', ctx => 'hello advent!!'),
    api: [
        get('/test', ctx => 'hello test test')
    ]
};

module.exports = routes;