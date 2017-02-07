const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            //pretty print json
            // console.log(JSON.stringify(body, undefined, 2));

            if (error) {
                reject('unable to connect to servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find that address.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
                // console.log(`Address: ${body.results[0].formatted_address}`);
                // console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
                // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            } else {
                reject('Unknown Error -- ' + body);
            }


        });
    })
};


geocodeAddress('80120').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});