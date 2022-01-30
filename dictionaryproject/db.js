const mysql = require("mysql");

// creating connection string
const connString = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'entries'
});

// creating MySQL database connection
connString.connect(error => {
  if (error) throw error;
  console.log("Connection established....");
});

module.exports = connString;