const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const { request, response } = require("express");
const { stringify } = require("querystring");

const app = Express();

app.use(BodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3000);
Mongoose.connect("mongodb://localhost:27017/myapp")
  .then((connection) => {
    console.log("Connected to DB");
    const Schema = Mongoose.Schema;

    const mainItemsSchema = new Schema({
      name: String,
    });

    const mainItems = connection.model("main-items", mainItemsSchema);

    app.get("/api/mainlistitems", (request, response) => {
      mainItems.find((err, item) => {
        response.status(200).json(item);
      });
    });

    app.post("/api/mainlistitems", (request, response) => {
      const name = request.body.name;
      console.log(name);

      mainItems.create({name}, (err, item) => {
        response.status(200).json(item);
      });
    });

    app.put("/api/mainlistitems", (request, response) => {
      const id = request.body.id;
      const name = request.body.name;

      mainItems.findOneAndUpdate(
        {
          _id: id,
        },
        {
          name: name,
        },
        {
          new: true,
        },
        (err, item) => {
          response.status(200).json(item);
        }
      );
    });

    app.delete("/api/mainlistitems", (request, response) => {
      const id = request.body.id;
      mainItems.deleteOne(
        {
          _id: id,
        },
        (err, item) => {
          response.status(200).json(item);
        }
      );
    });
  })
  .catch((e) => {
    console.log(e);
  });
