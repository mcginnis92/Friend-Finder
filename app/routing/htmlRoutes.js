var path = require("path");

module.exports = function(app) {

    //Route to the home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    // Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}