const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;
const routes = require('./Routes/index.js');
const cors = require('cors')
const multer = require('multer');
const logger = require('morgan');
const formData = require("express-form-data");

app.use(cors());
app.use(express.json({limit : '200mb'}));
app.use(express.urlencoded({extended: false })); //Parse URL-encoded bodies
app.use(logger('dev'));



const storage = multer.diskStorage({
    destination: './public/uploads/'
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});


/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
 */
const options = {
  uploadDir: './public/uploads',
  autoClean: true
};

// parse data with connect-multiparty. 
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream 
app.use(formData.stream());
// union the body and the files
app.use(formData.union());



for(route in routes)
	app.use(`/${routes[route]['prefix']}`,routes[route]['route']);

app.listen(port);