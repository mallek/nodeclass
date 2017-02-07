var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Unable to add arguments, they must be numbers")
            }
        }, 1500);
    })
}

asyncAdd(5, 7).then((res) => {
    console.log(res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('should be 45', res);
    }).catch((errorMessage) => {
    console.log(errorMessage)
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        // resolve('hey, it worked');
//         reject('unable to filfill promise');
//     }, 2500);


// });


// somePromise.then((message) => {
//     console.log('success ', message);
// }, (errorMessage) => {
//     console.log('error: ', errorMessage)
// });