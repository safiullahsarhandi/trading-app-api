
// here you can add files which registers route internally for a specific actor or part 
const apiRoutes = require('./apiRoutes.js');
const routes = [
	...apiRoutes,
];

module.exports =  routes;