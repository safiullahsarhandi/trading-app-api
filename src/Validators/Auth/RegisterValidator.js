let Validator = require('validatorjs');
let pathAlias = require('path-alias');
let {apiValidationErrors} = pathAlias('src/Utils/apiHelpers');
require('../../Utils/CustomValidations');

module.exports = (req,res,next)=>{
    
    let validation = new Validator(req.body, {
        name : 'required',
		username : 'required|unique:User',
		email : 'required|email|unique:User',
		password : 'required'
	});

	if(validation.fails()){

	let data = apiValidationErrors(validation.errors.all());
		return res.status(422).json(data);
	}

	next();
}; 