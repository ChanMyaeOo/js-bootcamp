// Read existing notes from the localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  return notesJSON ? JSON.parse(notesJSON) : [];
};

// Save new note to localStorage
const saveNote = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove note from the list
const removeNote = id => {
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate DOM for new note
const generateNoteDOM = note => {
  const noteEl = document.createElement('div');
  const paragraph = document.createElement('a');
  const removeBtn = document.createElement('button');

  // Setup remove note button
  removeBtn.textContent = 'x';
  noteEl.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
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
const sortNote = (notes, sortBy) => {
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
const renderNotes = (notes, filter) => {
  notes = sortNote(notes, filter.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filter.searchText.toLowerCase())
  );
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(note => {
    const paragraph = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(paragraph);
  });
};

// Generate last edited date
const generateLastEdited = timestamp =>
  `Last edited ${moment(timestamp).fromNow()}`;
