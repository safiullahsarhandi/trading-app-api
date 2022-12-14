const { Op } = require('sequelize');
const Validator = require('validatorjs');
const sequelize  = require('../Models');


Validator.registerAsync('unique', async function(value,  attribute, req, passes) {
    if (!attribute) throw new Error('Specify Requirements i.e fieldName: unique:table,column');
    //split table and column
    let attArr = attribute.split(",");
    if (attArr.length !== 2) throw new Error(`Invalid format for validation rule on ${attribute}`);

    //assign array index 0 and 1 to table and column respectively
    const { 0: table, 1: column } = attArr;
    //define custom error message
    let msg = `${column.replace('_',' ')} already been taken`;

    let where = {};
    
    where[column] = value;
    let result = await sequelize[table].findOne({
        where,
    });
    if(result){
        passes(false, msg); // return false if value exists
        return;
    }
    passes();
});


const validator = (body, rules, callback,customMessages = {}) => {
    const validation = new Validator(body, rules, customMessages)

    validation.passes(() => callback(null, true));

    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;