const DappsToken = artifacts.require("./DappsToken.sol");

module.exports = (deployer) => {
  const initialSupply = 1000;
  deployer.deploy(DappsToken, initialSupply);
};
