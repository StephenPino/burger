var connection = require("./connection.js");

var orm = {
    selectAll: (tableInput) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            console.log(result);
        });
    },
    insertOne: (something) => {
        var queryString = "";
        connection.query(queryString, [], (err, result) => {
            console.log(result);
        });
    },
    updateOne: (something) => {
        var queryString = "";
        connection.query(queryString, [], (err, result) => {
            console.log(result);
        });
    }

};

module.exports = orm;