let myAccount = {
  name: 'Chan',
  expenses: 0,
  incomes: 0
};

let addExpenses = (account, amount) => {
  myAccount.expenses = myAccount.expenses + amount;
};

addExpenses(myAccount.name, 2000);
console.log(myAccount);
