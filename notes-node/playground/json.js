const fs = require('fs');

// var obj = {
//     name: 'Travis',
//     age: 35
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);


// fs.writeFileSync('person.json', stringObj);


// //var personString = '{"name": "Travis", "age" : 35}';

// var personString = fs.readFileSync('person.json');

// var personObj = JSON.parse(personString);

// console.log(typeof personObj);
// console.log(personObj);


var originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteStrging = fs.readFileSync('notes.json');

var note = JSON.parse(noteStrging)

console.log(typeof note);
console.log(note.title)