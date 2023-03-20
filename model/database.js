require('dotenv').config();
const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
	host: DB_HOST || '127.0.0.1',
	user: DB_USER || 'root',
	password: DB_PASS,
	database: DB_NAME || 'database',
	multipleStatements: true,
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');

	let sql = `DROP TABLE IF EXISTS user_info;
              CREATE TABLE user_info (
              uID INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
              firstname VARCHAR(40) NOT NULL,
              lastname VARCHAR(40) NOT NULL,
              username VARCHAR(40),
              password VARCHAR(255) NOT NULL,
              email VARCHAR(40),
              pronouns VARCHAR(40),
              avatar VARCHAR(5000),
              bio VARCHAR(5000),
              location VARCHAR(500),
              level VARCHAR(200),
              top TINYINT(1),
              gender VARCHAR(50)
              );
              
              DROP TABLE IF EXISTS days;
              CREATE TABLE days(
              dID INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
              uID INTEGER REFERENCES user_info(uID),
              day VARCHAR(20));`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table creation `user_info` and 'days' was successful!");

		console.log('Closing...');
	});

	con.end();
});
