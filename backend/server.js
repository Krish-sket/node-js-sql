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
    var sql = "UPDATE Students SET Student_City='Mumbai' WHERE Student_ID=102";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data Updated");
    });
});