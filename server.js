// ===========================================
// Importing Dependencies
// ===========================================

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// ===========================================
// Declaring Hosting Variables
// ===========================================

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// ===========================================
// Configuring app instance
// ===========================================

app.use(bodyParser.urlencoded({extended: true}));

// ===========================================
// Configuring the routes
// ===========================================

app.use("/", (req, res) => {
    res.send("Connected!");
});

// ===========================================
// Running the Server
// ===========================================

app.listen(PORT, HOST, () => {
    console.clear();
    console.log(
        "Server started @ http://" + HOST + ":" + PORT
   );
});