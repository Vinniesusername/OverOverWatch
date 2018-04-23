const http = require('http');
const express = require('express');
const RedisServer = require('redis-server');

const rel = '/../client_side/';
// const RedisInstance = new RedisServer({
//     port: 6379,
//     bin: '/node_modules'
// });

// RedisInstance.open((err) => {
//     if (err === null) {
//         // pass
//     }
// });

const server = express();
    server.use(express.static(__dirname+rel+'html_and_css'));
    server.use(express.static(__dirname+rel+'images'));
    server.use(express.static(__dirname+rel+'javascript'));
    http.createServer(server).listen(9001);

server.get('/', function(req, res) {
    res.render('index.html')
});
