const geocode = require('../geocode/geocode');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        geocode.geocodeAddress(address, (errorMessage, results) => {
            if (errorMessage) {
                reject(errorMessage);
            } else {
                resolve(results);
            }
        });
    })
};


geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});