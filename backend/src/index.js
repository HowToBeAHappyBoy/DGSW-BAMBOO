const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const {
  PORT,
} = require('config/serverconfig.json');

const db = require('./database');

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(bodyParser.json());

app.use('/', require('./api'));

app.use('/public', express.static('public'));

server.listen(PORT, () => {
  db();
  console.log('server runing');
});
