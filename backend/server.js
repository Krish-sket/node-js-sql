const express = require('express');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "Rz8hqn1dK4",
    password: "nd0WKO3xeO",
    database: "Rz8hqn1dK4"
});
connection.connect((err) => {
    if (err) throw err
    console.log("connected");
    var sql = "DROP TABLE Student";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Dropped DB")
    });
    var sql = "INSERT INTO Students(Student_ID,Student_FirstName,Student_LastName,Student_City,Student_Grade)VALUES(1,'Riya','Kumar','Bangalore','5')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data inserted");
    });
});