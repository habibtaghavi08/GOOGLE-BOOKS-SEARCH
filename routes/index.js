var db= require("../models")
var axios = require("axios")
function routes(app){
    app.get("/api/googlebooks/:title", function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ req.params.title).then(function (results){
            res.json(result.data)
        })
    })
    app.post("/api/books", function (req, res){
        db.Book.create(req.body).then(function(results){
            res.json(results.data)
        })
    })
    app.delete("/api/books/:id", function(req, res){
        db.Book.remove({
            _id: req.params.id
        })
        .then(function(results){
            res.json(results.data)
        })
    })
    app.get("/api/books", function (req, res){
        db.Book.find().then(function (results){
            res.json(results)
        })
    })
}
module.exports = routes
