var port = 8080;

var express = require("express");
var app = express();
var cors = require('cors');



var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(bodyParser.json());
var morgan = require('morgan');
var winston = require('./config/winston');

app.use(cors());



var index = require('./router/router.js');
require('./router/router.js')(app);
app.use(morgan("combined", { stream: winston.stream }));

app.use('/', index);



var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

