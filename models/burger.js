// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // selectWhere: function(eatenCondition, cb) {
  //   orm.selectAll("burgers", "devoured", eatenCondition, function(res) {
  //     cb(res);
  //   });
  // },
  //TODO: Could make following more generic, feed info about 'burgers' table etc.
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(newEatenStatus, burgerID, cb) {
    orm.updateOne(newEatenStatus, burgerID, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
