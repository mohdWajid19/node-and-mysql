require("dotenv").config()
const express = require("express")
const app = express()
const con = require("./models/connect")
const port = process.env.PORT || 5500

var result = [
  {roll : 123},
  {roll : 456}
]

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", text={fakeData:result})
})

app.listen( port, () => {
    console.log(`server running on http://localhost:${port}/`)
})