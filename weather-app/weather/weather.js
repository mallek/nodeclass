const request = require('request');

const apiKey = '0e68fad128467875ece1b17342e3d252'

var getWeatherByLatAndLng = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to weather servers');
        } else if (response.statusCode === 404) {
            callback('unable to find weather for that location');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                currentTempature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary
            });
        } else {
            callback('Unknown Error -- '+ body);
        }
    });
};



module.exports.getWeatherByLatAndLng = getWeatherByLatAndLng;

