console.log('starting app');

setTimeout(() => {
    console.log('Timeout Fired inside of callback')
}, 2000)

setTimeout(() => {
    console.log('2nd callback')
}, 0)


console.log('Finishing up')