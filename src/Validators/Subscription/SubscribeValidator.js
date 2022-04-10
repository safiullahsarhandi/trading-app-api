let Validator = require('validatorjs');
let pathAlias = require('path-alias');
let {apiValidationErrors} = pathAlias('src/Utils/apiHelpers');
module.exports = (req,res,next)=>{
	let validation = new Validator(req.body, {
		user_id : 'required'
	});

	if(validation.fails()){

	let data = apiValidationErrors(validation.errors.all());
		return res.status(422).json(data);
	}

	next();
}; 