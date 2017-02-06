const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Adds a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Lists all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
    })
    .help()
    .alias('help', 'h')
    .argv;
var command = argv._[0];

// console.log('Command: ', command);
// console.log('Yargs: ', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note Added with title ${note.title}`);
        notes.printNote(note);
    } else {
        console.log("Note alrerady exists");
    }
} else if (command === 'list') {

    var allNotes = notes.getAll();
    console.log(`Listing all ${allNotes.length} notes`);

        _.each(allNotes, (note) => notes.printNote(note));

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.printNote(note);
    } else {
        console.log("That note does not exist")
    }
} else if (command === 'remove') {
    var noteWasRemoved = notes.removeNote(argv.title);

    if (noteWasRemoved) {
        console.log("Note was removed successfully");
    } else {
        console.log("There was no note by that name to remove");
    }
} else {
    console.log('Command not recognized');
}