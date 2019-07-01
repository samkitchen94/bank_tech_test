describe("Bank Statement", function() {
  beforeEach(function() {
    account = new Account();
    statement = new Statement(account);
  });

  describe("#initialize", function() {
    it("initializes with an account", function() {
      expect(statement.account).toEqual(account)
    });
    it("shows the balance of the account", function() {
      expect(statement.account.balance).toEqual(0)
    });
  });

  describe("formatDate", function() {
    it("formats a date so it does not show time and gmt etc", function() {
      var date = new Date('03/12/2019')
      expect(statement.formatDate(date)).toEqual('12/2/2019')
    });
  });
  // describe("showTransactions", function() {
  //   it("shows a list of previous transactions", function() {
  //     statement.account.deposit(100.00, 12/07/2019)
  //     statement.account.withdraw(50.00, 13/07/2019)
  //     expect(statement.showTransactions()).toEqual(
  //       "date || credit || debit || balance \n
  //       12/07/2019 || || 100.00 || 100.00 \n
  //       13/07/2019 || 50.00 || || 50.00")
  //   });
  // });
});
