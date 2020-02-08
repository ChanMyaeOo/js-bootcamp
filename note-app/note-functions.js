// Read existing notes from the localStorage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Save new note to localStorage
const saveNote = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate DOM for new note
const generateNoteDOM = function(note) {
  const noteEl = document.createElement('div');
  const paragraph = document.createElement('span');
  const removeBtn = document.createElement('button');

  removeBtn.textContent = 'x';
  noteEl.appendChild(removeBtn);

  if (note.title.length > 0) {
    paragraph.textContent = note.title;
  } else {
    paragraph.textContent = 'Unnamed note';
  }

  noteEl.appendChild(paragraph);

  return noteEl;
};

// Rendering notes
const renderNotes = function(notes, filter) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
  });
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(function(note) {
    const paragraph = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(paragraph);
  });
};
