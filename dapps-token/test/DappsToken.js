var DappsToken = artifacts.require("./DappsToken.sol");

contract("DappsToken", (accounts) => {
  it("should put 1000 DappsToken is the first account", async () => {
    const instance = await DappsToken.deployed();
    const balance = await instance.balanceOf.call(accounts[0]);
    assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account");
  });
});