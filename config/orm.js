var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
    console.log(result);
    cb(result);
    });
  },
  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //     console.log(result);
  //   });
  // },
  insertOne: function(burgerToInsert, cb) {
    var queryString = "INSERT INTO burgers (burger_name, date) VALUES (?, current_timestamp());";
    console.log(queryString);
    connection.query(queryString, [burgerToInsert], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(newEatenStatus, burgerIdToUpdate, cb) {
    // var queryString = "UPDATE burgers SET devoured= ? WHERE ??"; TODO: Find out why this didn't work
    var queryString = "UPDATE burgers SET devoured = " + true + " WHERE " + burgerIdToUpdate +";";
    console.log(queryString);
    // console.log(newEatenStatus);
    connection.query(queryString, [newEatenStatus, burgerIdToUpdate], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //     console.log(result);
  //   });
  // },
  // selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
  //     console.log(result);
  //   });
  // },
  // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
  //     console.log(result);
  //   });
  // }
};

module.exports = orm;
