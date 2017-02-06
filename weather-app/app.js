const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const addressOptions = {
    describe: 'Address to search weather for',
    demand: true,
    alias: 'a',
    string: true
};

const argv = yargs
    .option({
        address: addressOptions
    })
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        weather.getWeatherByLatAndLng(results.latitude, results.longitude, (e, r) => {
            if (e) {
                console.log(e);
            } else {
                console.log(JSON.stringify(r, undefined, 2));
            }
        });
    }

});






//0e68fad128467875ece1b17342e3d252


