// ===========================================
// Importing Dependencies
// ===========================================

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// ===========================================
// Environment Variables
// ===========================================

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// ===========================================
// ROUTES
// ===========================================

const AuthRoutes = require("./Routes/Auth");

// ===========================================
// Configuring app instance
// ===========================================

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.set("view engine", "ejs");

// ===========================================
// Configuring the routes
// ===========================================

app.get("/", (_, res) => res.render("index"));
app.use("/user", AuthRoutes);

// ===========================================
// Running the Server
// ===========================================

// Connecting to database
mongoose.connect(
   `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
   }@cluster0-cqxyc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
   { useNewUrlParser: true },
   err => {
      if (err) console.log(err);
      else {
         // Running the server
         app.listen(PORT, HOST, () => {
            console.clear();
            console.log("Server started @ http://" + HOST + ":" + PORT);
         });
      }
   }
);
