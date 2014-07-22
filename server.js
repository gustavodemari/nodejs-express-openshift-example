#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();


var SERVER_PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var SERVER_IPADDRESS = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.get('/', function(req, res){
  res.send('Hello world OpenShift!');
})

app.listen(SERVER_PORT, SERVER_IPADDRESS, function(){
  console.log('Server started');
  console.log('Listening at '+SERVER_IPADDRESS+':'+SERVER_PORT);
});