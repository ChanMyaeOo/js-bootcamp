const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(e) {
  //   console.log(e.target.value);
  note.title = e.target.value;
  saveNote(notes);
});

bodyElement.addEventListener('input', function(e) {
  note.body = e.target.value;
  saveNote(notes);
});

removeElement.addEventListener('click', function(e) {
  removeNote(note.id);
  saveNote(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);

    note = notes.find(function(note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign('/index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
  }
});
