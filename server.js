const path = require('path');
require('dotenv').config()
require('./src/app.js');

var pathAlias = require('path-alias');

pathAlias.setAlias('app', './');