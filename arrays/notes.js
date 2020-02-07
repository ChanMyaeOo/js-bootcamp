let notes = [
  {
    title: 'learn something',
    body: 'learn js in every morning'
  },
  {
    title: 'music',
    body: 'listen english music and play guitar'
  },
  {
    title: 'exercise',
    body: 'go walk out at night'
  }
];

const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    else if (b.title.toLowerCase() < a.title.toLowerCase()) return 1;
    else return 0;
  });
};

const note = findNote(notes, 'music');
// console.log(note);

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodymatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodymatch;
  });
};

// console.log(findNotes(notes, 'guitar'));
sortNotes(notes);
console.log(notes);

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return index;
// };

// const note = findNote(notes, 'Exercise');
// console.log(notes[note]);

// const index = notes.findIndex(function(note) {
//   return note.title === 'music';
// });
// console.log(index);
