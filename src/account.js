function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype = {
  getBalance() {
    return this.balance;
  },

  deposit(money, date = new Date()) {
    this.balance += money;
    this.transactions.push({
      date: date,
      amount: money,
      balance: this.getBalance(),
    });
  },

  withdraw(money, date = new Date()) {
    this.balance -= money;
  },


  getTransactions() {
    return this.transactions;
  },
};
