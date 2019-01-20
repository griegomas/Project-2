var db = require("../models");
var axios = require("axios");

// If we can incorporate handlebars, we will need the below code
// var express = require("express");
// var router = express.Router();

module.exports = function(app) {
  //Not sure if we are going to need a 'get' or anything. Putting here, just in case.
  app.get("/api/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/climate/:ISO3", function(req, res) {
    var queryURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/" + req.params.ISO3;
    axios.get(queryURL).then(
      function(response) {
        // console.log(response.data);
        res.json(response.data);
      }
    );
  });

  app.get("/api/pr/:ISO3", function(req, res) {
    var queryURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/pr/year/" + req.params.ISO3;
    axios.get(queryURL).then(
      function(response) {
        // console.log(response.data);
        res.json(response.data);
      }
    );
  });
  // var ISO3 = $("#media-input").val();

  // tas = temperature; pr = precipitation 
  

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};



// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  }
);