const account = {
  name: 'Chan Myae',
  expenses: [],
  incomes: [],
  addExpenses: function(description, amount) {
    const expense = {
      description,
      amount
    };
    this.expenses.push(expense);
  },
  totalExpenses: function() {
    let total = 0;
    this.expenses.forEach(cur => {
      total += cur.amount;
    });
    return total;
  },

  totalIncomes: function() {
    let total = 0;
    this.incomes.forEach(cur => {
      total += cur.amount;
    });
    return total;
  },

  getAccountSummery: function() {
    let balance = this.totalIncomes() - this.totalExpenses();
    return `${
      this.name
    } has a balance of $${balance}. $${this.totalIncomes()} in incomes. $${this.totalExpenses()} in expenses.`;
  },

  addIncome: function(description, amount) {
    this.incomes.push({
      description,
      amount
    });
  }
};

account.addExpenses('buy books', 2000);
account.addExpenses('food', 3000);

account.addIncome('sell items', 5000);
account.addIncome('job', 10000);
// console.log(account.expenses);
console.log(account.totalExpenses());
console.log(account.getAccountSummery());

// console.log(account.totalIncomes());
