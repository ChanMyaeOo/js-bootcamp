const account = {
  name: 'Chan Myae Oo',
  expense: [],
  income: [],
  addExpense: function(description, amount) {
    this.expense.push({
      description: description,
      amount: amount
    });
  },
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncomes = 0;
    let balance = 0;
    this.expense.forEach(function(expense) {
      totalExpenses += expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncomes += income.amount;
    });

    balance = totalIncomes - totalExpenses;

    return `${this.name} has a balance of $${balance}. ${totalIncomes} in incomes. ${totalExpenses} in expenses.`;
  }
};

account.addExpense('buy food', 6000);
account.addExpense('go outside', 2000);
account.addIncome('job', 10000);

console.log(account.getAccountSummary());
