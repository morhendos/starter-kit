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

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
