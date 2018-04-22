const http = require('http');
const express = require('express');
const path = require('path');

const rel = '/../client_side/';

const server = express();
    server.use(express.static(__dirname+rel+'html_and_css'));
    server.use(express.static(__dirname+rel+'images'));
    server.use(express.static(__dirname+rel+'javascript'));
    http.createServer(server).listen(9001);

server.get('/', function(req, res) {
    res.render('index.html')
});

