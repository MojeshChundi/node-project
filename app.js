const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/product-page", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><input type='text' name='title'/><button type='submit'>add product</button></form>"
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>hello from node js!</h1>");
});

app.listen(3000);
