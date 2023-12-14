var  http=require('http');
var app=require('./acc');
http.createServer(acc.handleRequest).listen(8000);