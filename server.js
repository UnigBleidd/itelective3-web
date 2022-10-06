const { render } = require('ejs');
var express = require('express');

var app = express();

var weather = require('weather-js');

app.set('view engine', 'ejs')
app.get('/', function (req, res) {

    weather.find({ search: 'Davao City, PH', degreeType: 'C' }, function (err, result) {
        var weather_data = null;
        if (err) console.log(err);
        else {

            weather_data = result;

        }

        res.render('index', { panahon: weather_data });
    });

})



app.get('/other', async function (req, res) { 
    app.use( express.static( "views" ) );
    res.render('other.ejs');

  });


  var fetchUrl = require("fetch").fetchUrl;


  fetchUrl("https://catfact.ninja/fact", function(error, meta, body){
  
  cat= JSON.parse(body);
  fact = cat;
  app.render('other', fact);
  console.log(fact);
  });
  
app.listen(8000);