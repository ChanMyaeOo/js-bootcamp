const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-updated-text');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(note => note.id === noteId);

if (!note) {
  location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
// to show last edited time
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', e => {
  //   console.log(e.target.value);
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNote(notes);
});

bodyElement.addEventListener('input', e => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNote(notes);
});

removeElement.addEventListener('click', e => {
  removeNote(note.id);
  saveNote(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);

    note = notes.find(note => note.id === noteId);

    if (!note) {
      location.assign('/index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
