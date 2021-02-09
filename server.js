const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const trsRouter = require("./routes/transactions");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/transactions", trsRouter);

app.listen("5000", () => {
  console.log("listening on port 5000");
});


//node v13.14.0