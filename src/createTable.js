const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect();

const createTableQuery = `CREATE TABLE todos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    list TEXT NOT NULL
)`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Table created successfully");
  }
});
