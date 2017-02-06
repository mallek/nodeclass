const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=561%20e%20caley%20dr%20denver%20co',
    json: true
}, (error, response, body) => {
    //pretty print json
    console.log(JSON.stringify(response, undefined, 2));
});

