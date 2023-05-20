const http=require('http');
const app=require('./app');
const port=3000;
const server=http.createServer(app);
server.timeout=30000;
server.listen(port);
module.exports = server;
