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
});
