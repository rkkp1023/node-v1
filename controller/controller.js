const register = require('../model/register.js');

const env = require('../config/database.config');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//mongoose connectivity
mongoose.connect(env.databasecon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//Save Api
exports.register = (req, res) => {
    console.log("body", req.body);

    var registerSave = new register(req.body);
    registerSave.save()
        .then(documents => {
            console.log("the document", documents);
            //     res.send("data" + documents);
            res.status(200).json({
                "status": "200",
                "data": documents

            });
        }).catch(err => {
            res.status(400).json({
                "status": "400",
                "err": err

            });
        });

}
// get Api
exports.getLoginData = (req, res) => {
    console.log("REq", req);

    loginDetail.find().then(
        document => {
            res.status(200).json(({
                "status": "200",
                "data": document
            }));
        }
    ).catch(err => {
        res.status(400).json({
            "status": "400",
            "err": err

        });
    })
}