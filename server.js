require('dotenv').config({path: path.resolve(__dirname,'../.env')})
require('./src/app.js');

var pathAlias = require('path-alias');

pathAlias.setAlias('app', './');