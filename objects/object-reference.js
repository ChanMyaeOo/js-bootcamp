let myAccount = {
  accountName: 'Chan Myae',
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.accountName} has $${balance}. ${account.income} in income and ${account.expenses} in expenses.`;
};

addIncome(myAccount, 10000);
addExpense(myAccount, 1000);
addExpense(myAccount, 5000);
console.log(getSummary(myAccount));
resetAccount(myAccount);
console.log(getSummary(myAccount));
