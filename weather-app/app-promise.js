const yargs = require('yargs');
const axios = require('axios');

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

const apiKey = '0e68fad128467875ece1b17342e3d252'


var encodedAddress = encodeURIComponent(argv.address);
geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temp} it feels like ${apparentTemp}`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('unable to connect to api server')
    } else {
        console.log(e.message)
    }
    //console.log(e);
});

