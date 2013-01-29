/*
 * npm install lanyrd-scraper
 * node lanyrd.js > /content/api/lanyrd.json
 */

var lanyrd = require('lanyrd-scraper');
lanyrd.scrape('2013/wrocloverb', function(error, event) {
    console.log(event);
});
