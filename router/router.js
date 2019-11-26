module.exports = function (app) {
    const controller = require('../controller/controller.js');
    app.post("/register", controller.register);
    app.get("/loginData", controller.getLoginData);
}