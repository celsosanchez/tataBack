const tales = require("./tales")



module.exports = function (app) {
    // app.delete('/tales', tales.delTale);
    app.put('/tales', tales.addTale);
    app.get('/tales', tales.getTales);
}