const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/shared');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.')
        }

    });
    console.log(log);
    next();
});


//Maintinance Middleware
// app.use((req, res, next) => {
//     res.render('maintinance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    //res.send('<h1>Hello World!</h1>');

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welceome to our website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects Page',
    });
});

app.get('/json', (req, res) => {
    res.send({
        name: 'Travis',
        likes: [
            'Coding',
            'Skiing'
        ]
    });
})


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error Processing Request'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});