var server = require('./server');
var router = require('./route');
var handler = require('./handler');

var handel={};
handel["/"]=handler.home;
handel["/home"]=handler.home;
handel["/review"]=handler.review;

server.startserver(router.route, handel);