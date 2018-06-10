require('dotenv').config();

var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send({
    ipaddress:
      request.headers['x-forwarded-for'] || request.connection.remoteAddress,
    language: request.headers['accept-language'].split(',')[0],
    software: /\((.*?)\)/.exec(request.headers['user-agent'])[1]
  });
});

app.listen(process.env.PORT);
