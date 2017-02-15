const express = require("express");

var app = express();

app.get("/", (req, res) => {
     res.status(404).send({
        error: "Page not found.",
        name: "My App v1.0"
    });
});


app.get("/users", (req, res) => {
	var users = [
		{
			name: "Travis",
			age: 35
        },
		{
			name: "Ava",
			age: 7
		},
		{
            name: "Teagan",
			age: 5
		}
	];

	res.send(users);
});


app.listen(3000);

module.exports.app = app;