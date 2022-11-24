require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5500
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
    if (err) {
        console.log("error in db");
        return
    }
    console.log("Connected!");
  });


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen( port, () => {
    console.log(`server running on http://localhost:${port}/`)
})