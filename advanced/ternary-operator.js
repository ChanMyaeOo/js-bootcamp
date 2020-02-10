// const age = 14;
// const message = age >= 18 ? 'You can vote!' : 'You cannot vote.';
// console.log(message);

const age = 20;
const showPage = () => 'Showing the page';
const showError = () => 'Showing the error page';

const message = age >= 21 ? showPage() : showError();
// console.log(message);

const team = ['Gh', '33', 'Nikobaby', 'Miracle', 'Notail'];
const msg1 = `Team size: ${team.length}`;
const msg2 = 'Your team has too many players';
const statusMsg = team.length <= 4 ? msg1 : msg2;
console.log(statusMsg);
