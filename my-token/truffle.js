var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.ROPSTEN_NEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
  networks: {
      ropsten: {
          provider: function() {
              return new HDWalletProvider(mnemonic, "https://ropsten.infra.io/" + accessToken);
          },
          network_id: 3,
          gas: 500000,
      }
  }
};
