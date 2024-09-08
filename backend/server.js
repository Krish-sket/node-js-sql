const express = require('express');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "Rz8hqn1dK4",
    password: "nd0WKO3xeO",
    database: "Rz8hqn1dK4"
});
var sql = "CREATE TABLE Student(Student_ID INT, Student_FirstName VARCHAR(255), Student_LastName VARCHAR(255), Student_City VARCHAR(255)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Created in DB");
});
