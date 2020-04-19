"use strict";

module.exports = function (app) {
  var ica = require("../controllers/icaController");

  app.route("/login").get(ica.loginUser);

  app.route("/transactions").get(ica.transactions);
};
