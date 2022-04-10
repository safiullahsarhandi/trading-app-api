const bcrypt = require('bcrypt');
const util = require('util'); 
module.exports = {
    async generateHash(password,salt = 10){
       return await bcrypt.hash(password,salt); 
    },
    getTimestamp(date){
        return (new Date(date).getTime() / 1000);
    },
    getAccessToken(headerValue){
        let values = headerValue.split(' ');
        return values.length == 2?values[1]:null; 
    },
    ucFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    mt_rand (min, max) { // eslint-disable-line camelcase
        //  discuss at: https://locutus.io/php/mt_rand/
        // original by: Onno Marsman (https://twitter.com/onnomarsman)
        // improved by: Brett Zamir (https://brett-zamir.me)
        //    input by: Kongo
        //   example 1: mt_rand(1, 1)
        //   returns 1: 1
        const argc = arguments.length
        if (argc === 0) {
          min = 0
          max = 2147483647
        } else if (argc === 1) {
          throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given')
        } else {
          min = parseInt(min, 10)
          max = parseInt(max, 10)
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      shuffle(string) {
        var parts = string.split('');
        for (var i = parts.length; i > 0;) {
            var random = parseInt(Math.random() * i);
            var temp = parts[--i];
            parts[i] = parts[random];
            parts[random] = temp;
        }
        return parts.join('');
    },
    formatError(error){
      return {
        error: { ...error.data, status_code: error.status },
      };
    },
    prettyPrintResponse(response){
      console.log(util.inspect(response.data, { colors: true, depth: 4 }));
    }
    
    
};
