const notes = getSavedNotes();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

// listen to create new note
document.querySelector('#create-note').addEventListener('click', function(e) {
  const id = uuid();
  notes.push({
    id: id,
    title: '',
    body: ''
  });
  saveNote(notes);
  // renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-note').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#note-form').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e.target.elements.noteInput.value);
  e.target.elements.noteInput.value = '';
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
  console.log(e.target.value);
});
