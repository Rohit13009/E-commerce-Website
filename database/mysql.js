const mysql = require("mysql2");
const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    database : "ecommerce",
    password : "1234"
});

module.exports = pool.promise();
