const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// .env file to use for this instance
require("dotenv").config();

// default port number 3500 if we don't have an .env file
const PORT = process.env.PORT || 3500;

// create express app
const app = express();

// body parser parses json and non-json requests extracting params...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("It's working...");
});

app.use("/api/parents", require("./routes/private/parents"));
app.use("/api/students", require("./routes/private/students"));
app.use("/api/teachers", require("./routes/private/teachers"));

app.listen(PORT, () => console.log(`JSON app is running on port::${PORT}`));