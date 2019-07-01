describe("Bank account", function(){
  var account = new Account();

  it("initializes with a balance of 0", function() {
    expect(account.balance).toEqual(0);
  })
});
