describe("Bank Account", function(){
  beforeEach(function() {
    account = new Account()
  });
  describe("#getBalance", function() {
    it("initializes with a balance of 0", function() {
      expect(account.getBalance()).toEqual(0)
    });
  });

  describe("#deposit", function() {
    it("allows user to deposit money", function() {
      account.deposit(100.00, "1/07/2019")
      expect(account.getBalance()).toEqual(100.00)
    });
    it("saves the date, deposit amount and balance when money is deposited", function() {
      account.deposit(100.00, '01/07/2019')
      expect(account.getTransactions()).toEqual([{date: '01/07/2019', amount: 100.00, balance: 100.00}])
    });
  });

  describe("#withdraw", function() {
    it("allows user to withdraw money", function() {
      account.deposit(100.00, '01/07/2019')
      account.withdraw(50.00, '02/07/2019')
      expect(account.getBalance()).toEqual(50.00)
    });
    it("saves the date, deposit amount and balance when money is withdrawn", function() {
      account.deposit(100.00, '01/07/2019')
      account.withdraw(50.00, '02/07/2019')
      expect(account.getTransactions()).toEqual([{date: '01/07/2019', amount: 100.00, balance: 100.00}, {date: '02/07/2019', amount: -50.00, balance: 50.00}])
    });
  });

});
