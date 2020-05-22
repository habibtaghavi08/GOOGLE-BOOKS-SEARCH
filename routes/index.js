var db= require("../models")
var axios = require("axios")
function routes(app){
    app.get("/api/googlebooks/:title", function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ req.params.title).then(function (results){
            res.json(result.data)
        })
    })
}
module.exports = routes
