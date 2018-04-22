const http = require('http');
const express = require('express');
const path = require('path');

const rel = '/../client_side/html_and_css';

const server = express();
    server.use(express.static(__dirname+rel));
    http.createServer(server).listen(9001);

server.get('/', function(req, res) {
    res.render('index.html')
});

server.get('/pc', function(req, res) {
    res.sendFile(express.static('pc.html'))
});
