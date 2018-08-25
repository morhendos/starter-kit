/* eslint-disable no-console */
import express from 'express';
import path from'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

// gzip compression
app.use(compression());

// use static files from dist folder
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id":1,"firstName":"Tammy","lastName":"Norton","email":"tnorton@gmail.com"},
    {"id":1,"firstName":"Tina","lastName":"Lee","email":"tina@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
