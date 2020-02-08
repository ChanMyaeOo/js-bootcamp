const notes = getSavedNotes();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  notes.push({
    id: uuid(),
    title: '',
    body: ''
  });
  saveNote(notes);
  renderNotes(notes, filters);
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
