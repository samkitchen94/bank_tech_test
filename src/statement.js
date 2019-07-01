function Statement(account) {
  this.account = account;
};

Statement.prototype = {
  formatTransactions(transaction) {
    if (transaction['amount'] > 0) {
      return `${(transaction['date'])} || ${(transaction['amount']).toFixed(2)} || || ${transaction['balance'].toFixed(2)}`
    }
    else {
    return `${(transaction['date'])} || || ${(transaction['amount'] * -1).toFixed(2)} || ${transaction['balance'].toFixed(2)}`
    }
  },

  showTransactions() {
    var header = "date || credit || debit || balance\n"
    for(var i = this.account.getTransactions().length; i > 0; i--) {
      header += this.formatTransactions(this.account.getTransactions()[i - 1]) + '\n';
    }
    return header;
  },



};
