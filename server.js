const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes").default;
const app = express();
const PORT = process.env.PORT || 3005;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

mongoose.connect(process.env.MONGODB_URI || ("mongodb://localhost/GoogleBooksDb"),


// mongoose.connect(
//   process.env.MONGODB_URI || mongoose.connect("mongodb://localhost:27017/myapp"),
//    {useNewUrlParser: true});  
  // {
  //   useCreateIndex: true,
  //   useNewUrlParser; true
  // }


app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
