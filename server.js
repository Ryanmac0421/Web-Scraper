var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  //All the web scraping magic will happen here

})

app.listen('3000')

console.log('Magic happens on port 3000');

exports = module.exports = app;