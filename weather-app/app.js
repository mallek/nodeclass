const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
    json: true
}, (error, response, body) => {
    //pretty print json
    // console.log(JSON.stringify(body, undefined, 2));

    if (error) {
        console.log('unable to connect to servers.', error);
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find that address.');
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    } else {
        console.log('Unknown Error ', body);
    }


});

