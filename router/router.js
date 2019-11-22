module.exports = function (app) {
    const controller = require('../controller/controller.js');
    app.post("/login", controller.login);
    app.get("/loginData", controller.getLoginData);
}