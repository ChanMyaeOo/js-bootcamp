let myAccount = {
  name: 'Chan',
  expenses: 0,
  incomes: 0
};

let addExpenses = (account, amount) => {
  account.expenses = myAccount.expenses + amount;
};

let addIncomes = (account, amount) => {
  account.incomes = myAccount.incomes + amount;
};

let resetAccount = account => {
  account.expenses = 0;
  account.incomes = 0;
};

let getAccountSummery = account => {
  let currentAmount = account.incomes - account.expenses;
  let accountName = account.name;

  return `Account for ${accountName} has $${currentAmount}. $${account.incomes} in incomes. $${account.expenses} in expenses.`;
};

addIncomes(myAccount, 5000);
addExpenses(myAccount, 2000);
addExpenses(myAccount, 400);
console.log(getAccountSummery(myAccount));
resetAccount(myAccount);
console.log(getAccountSummery(myAccount));
