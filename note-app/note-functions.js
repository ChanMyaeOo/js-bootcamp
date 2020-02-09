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

// Remove note from the list
const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate DOM for new note
const generateNoteDOM = function(note) {
  const noteEl = document.createElement('div');
  const paragraph = document.createElement('a');
  const removeBtn = document.createElement('button');

  // Setup remove note button
  removeBtn.textContent = 'x';
  noteEl.appendChild(removeBtn);

  removeBtn.addEventListener('click', function() {
    // console.log(note.id);
    removeNote(note.id);
    saveNote(notes);
    renderNotes(notes, filters);
  });

  if (note.title.length > 0) {
    paragraph.textContent = note.title;
  } else {
    paragraph.textContent = 'Unnamed note';
  }

  paragraph.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.appendChild(paragraph);

  return noteEl;
};

// Sorting notes by one of three ways
const sortNote = function(notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function(a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort(function(a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byAlphabetical') {
    return notes.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Rendering notes
const renderNotes = function(notes, filter) {
  notes = sortNote(notes, filter.sortBy);
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
  });
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(function(note) {
    const paragraph = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(paragraph);
  });
};

// Generate last edited date
const generateLastEdited = function(timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`;
};
