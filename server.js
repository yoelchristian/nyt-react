const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
// app.use(routes);

var articlesController = require("./controllers/articlesController");
var router = new express.Router();
router.get("/api/articles", articlesController.findAll);
router.post("/api/articles", articlesController.create);
router.delete("/api/articles/id", articlesController.remove);
app.unsubscribe(router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


