const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const details = require("./routes/details");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "token, Origin, X-Requested-With, Content-Type, Accept, x-access-token, visitorid, tempsave"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use("/user/details", details);

app.listen(PORT, (req, res) => {
  // console.log(`Server Started at PORT ${PORT}`);
});
