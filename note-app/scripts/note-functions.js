// Read existing notes from the localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
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
  const noteEl = document.createElement('a');
  const paragraph = document.createElement('p');
  const statusEL = document.createElement('p');

  if (note.title.length > 0) {
    paragraph.textContent = note.title;
  } else {
    paragraph.textContent = 'Unnamed note';
  }
  paragraph.classList.add('list-item__title');
  noteEl.appendChild(paragraph);

  // Setup links
  noteEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.classList.add('list-item');

  // Setup the status message
  statusEL.textContent = generateLastEdited(note.updatedAt);
  statusEL.classList.add('list-item__subtitle');
  noteEl.appendChild(statusEL);

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
  const notesEl = document.querySelector('#notes');
  notes = sortNote(notes, filter.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filter.searchText.toLowerCase())
  );
  notesEl.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(note => {
      const paragraph = generateNoteDOM(note);
      notesEl.appendChild(paragraph);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No note to show';
    emptyMessage.classList.add('empty-message');
    notesEl.appendChild(emptyMessage);
  }
};

// Generate last edited date
const generateLastEdited = timestamp =>
  `Last edited ${moment(timestamp).fromNow()}`;
