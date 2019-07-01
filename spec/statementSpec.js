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

  describe("showTransactions", function() {
    it("shows a list of previous transactions", function() {
      statement.account.deposit(100.00, '12/07/2019')
      statement.account.withdraw(50.00, '13/07/2019')
      expect(statement.showTransactions()).toEqual(
        "date || credit || debit || balance\n13/07/2019 || || 50.00 || 50.00\n12/07/2019 || 100.00 || || 100.00\n")
    })
  })
});
