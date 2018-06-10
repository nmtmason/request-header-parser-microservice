require('dotenv').config();

const express = require('express');

let app = express();

const ipaddress = req => {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
};

const language = req => {
  return req.headers['accept-language'];
};

const software = req => {
  return req.headers['user-agent'];
};

app.get('/api/whoami', (req, res) => {
  res.send({
    ipaddress: ipaddress(req),
    language: language(req),
    software: software(req)
  });
});

app.listen(process.env.PORT);
