let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
};

renderNotes(notes, filters);

// listen to create new note
document.querySelector('#create-note').addEventListener('click', e => {
  const id = uuid();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  });
  saveNote(notes);
  // renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-note').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#note-form').addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.noteInput.value);
  e.target.elements.noteInput.value = '';
});

document.querySelector('#filter-by').addEventListener('change', e => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

// handle for localStorage data change
window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
