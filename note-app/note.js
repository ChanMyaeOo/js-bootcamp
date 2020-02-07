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

const filters = {
  searchText: ''
};

const renderNotes = function(notes, filter) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
  });
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(function(note) {
    const paragraph = document.createElement('p');
    paragraph.textContent = note.title;
    document.querySelector('#notes').appendChild(paragraph);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  e.target.textContent = 'The button was clicked';
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
