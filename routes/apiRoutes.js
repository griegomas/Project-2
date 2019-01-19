var db = require("../models");
var axios = require("axios");

// If we can incorporate handlebars, we will need the below code
// var express = require("express");
// var router = express.Router();

module.exports = function(app) {
  app.get("/api/climate/:ISO3", function(req, res) {
    var queryURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/" + req.params.ISO3;
    axios.get(queryURL).then(
      function(response) {
        console.log(response.data);
        res.json(response.data);
      }
    );
  });
};

  // var ISO3 = $("#media-input").val();

  // tas = temperature; pr = precipitation