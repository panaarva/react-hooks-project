const app = require('./src/app');
const http = require('http');
const port = process.env.PORT || '9000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);