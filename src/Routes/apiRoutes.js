/* 
this below defined format will automate the process of prefixing the route 
and combine different similar routes at one place
{
    prefix : 'api/auth',  //dont use trailing or leading slash 
    route : require('./Api/Auth'), // import the module where your routes are defined
} 
*/

const routes = [
	{
		prefix : 'api/auth',
		route : require('./Api/Auth'),
	},
	{
		prefix : 'api/account',
		route : require('./Api/Account'),
	},
    {
		prefix : 'api/bookmark',
		route : require('./Api/Bookmark'),
	},
    {
		prefix : 'api/review',
		route : require('./Api/Review'),
	},
    {
		prefix : 'api/subscription',
		route : require('./Api/Subscription'),
	},


];
module.exports = routes;