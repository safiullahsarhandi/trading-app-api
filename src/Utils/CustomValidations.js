const { Op } = require('sequelize');
const Validator = require('validatorjs');
const sequelize  = require('../Models');
Validator.register('unique',async (value,args,attribute) => {
    if(args == undefined){

        throw new Error('must pass Model name eg: unique:Model_name');
        return;
    }
    let arguments = args.split(',');
    let key = (arguments[1] || attribute);
    let where = {};
    
    where[key] = value;
    console.log(where);
    let data = await  sequelize[arguments[0]].findOne({
        where,
    }); 
    console.log(data);
    if(data)
        return false;
    
    return true;
},':attribute already taken');
