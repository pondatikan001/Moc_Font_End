const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/M7-Project-test-db", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model(
    "items",
    new mongoose.Schema({
      id: { type: String, default: shortid.generate },
      name: String,
      type: String,
      detail: String,
      image: String,
    })
  );

app.get("/api/items", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  });

app.post("/api/items", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  });
  
app.delete("/api/items/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  });
  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("serve at http://localhost:3000"));