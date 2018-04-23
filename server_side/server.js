const http = require('http');
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
var fs = require('fs');

eval(fs.readFileSync('./../client_side/javascript/computerScript.js')+'');

const rel = '/../client_side/';
const redis_c = redis.createClient();

redis_c.on('connect', function () {
    console.log('connected to redis server')
});

const server = express();
    server.use(express.static(__dirname+rel+'html_and_css'));
    server.use(express.static(__dirname+rel+'images'));
    server.use(express.static(__dirname+rel+'javascript'));
    server.use(bodyParser.urlencoded({
        extended: true
    }));

    http.createServer(server).listen(9001);

let pc_list = [];
redis_c.hgetall('pc', function(err, object) {
    if (err !== null) {
        console.log(err);
    }
    pc_list = object
});

let mo_list = [];
redis_c.hgetall('mobile', function(err, object) {
    if (err !== null) {
        console.log(err);
    }
    mo_list = object
});

let xb_list = [];
redis_c.hgetall('xbox', function(err, object) {
    if (err !== null) {
        console.log(err);
    }
    xb_list = object
});

let ps_list = [];
redis_c.hgetall('ps4', function(err, object) {
    if (err !== null) {
        console.log(err);
    }
    ps_list = object
});

server.post('/PC.html', function(req, res) {
    let price = req.body.price;
    let genre = req.body.genre;
    let LOVE = req.body.LOVE;
    let PlayLevel = req.body.PlayLevel;
    let WorldStyle = req.body.WorldStyle;
    let gpu = req.body.gpu;

    let survey_ans = [price, genre, LOVE, PlayLevel, WorldStyle, gpu];

    let rec = output(pc_list, 'pc', survey_ans);
    console.log(rec);
    res.send(rec);
});

server.post('/mobile.html', function(req, res) {
    let price = req.body.price;
    let genre = req.body.genre;
    let PlayLevel = req.body.PlayLevel;
    let WorldStyle = req.body.WorldStyle;

    let survey_ans = [price, genre, PlayLevel, WorldStyle];

    let rec = output(mo_list, 'mobile', survey_ans);
    console.log(rec);
    res.send(rec);
});

server.post('/XBoxOneX.html', function(req, res) {
    let price = req.body.price;
    let genre = req.body.genre;
    let LOVE = req.body.LOVE;
    let PlayLevel = req.body.PlayLevel;
    let WorldStyle = req.body.WorldStyle;

    let survey_ans = [price, genre, LOVE, PlayLevel, WorldStyle];

    let rec = output(xb_list, 'xbox', survey_ans);
    console.log(rec);
    res.send(rec);
});

server.post('/ps4.html', function(req, res) {
    let price = req.body.price;
    let genre = req.body.genre;
    let LOVE = req.body.LOVE;
    let PlayLevel = req.body.PlayLevel;
    let WorldStyle = req.body.WorldStyle;

    let survey_ans = [price, genre, LOVE, PlayLevel, WorldStyle];

    let rec = output(xb_list, 'ps4', survey_ans);
    console.log(rec);
    res.send(rec);
});