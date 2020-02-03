const prgs = document.querySelectorAll('p');
prgs.forEach(p => {
  if (p.textContent.includes('the')) p.remove();
});

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph from javascript';
document.querySelector('body').appendChild(newParagraph);
