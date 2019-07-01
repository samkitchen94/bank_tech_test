function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype.getBalance = function() {
  return this.balance;
};

Account.prototype.deposit = function(money, date = new Date()) {
  this.balance += money;
  this.transactions.push({
    date: date,
    amount: money,
    balance: this.getBalance()
  });
};

Account.prototype.getTransactions = function() {
  return this.transactions;
}
