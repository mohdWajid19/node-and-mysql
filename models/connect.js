const mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    database:"my_database_name",
    password: ""
});
  
con.connect(function(err) {
    if (err) {
        console.log(err.message);
        return
    }
    console.log("Connected!");
});

module.exports = con;