const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const { request, response } = require("express");
const { stringify } = require("querystring");
const url = require('url');

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
      img: String,
      price: Number,
      description: String,
      size: String,
      material: String,
      color: String,
      style: String
    });

    const mainItems = connection.model("main-items", mainItemsSchema);

    app.get("/api/mainlistitems", (request, response) => {
      // request.params;
      const params = url.parse(request.url, true).query;
      const query = {};
      Object.keys(params).forEach (key => {
        query[key] = params[key].split(',');
      })
      console.log(query);
      mainItems.find(query).then((item) => {
        // console.log(item);
        response.status(200).json(item);
      });
    });


    app.post("/api/mainlistitems", (request, response) => {
      const name = request.body.name;
      const img = request.body.img;
      const price = request.body.price;
      const description = request.body.description;
      console.log(name);

      mainItems.create({ name, img, price, description }, (err, item) => {
        response.status(200).json(item);
      });
    });

    app.put("/api/mainlistitems", (request, response) => {
      const id = request.body.id;
      const name = request.body.name;
      const img = request.body.img;
      const price = request.body.price;
      const description = request.body.description;

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
