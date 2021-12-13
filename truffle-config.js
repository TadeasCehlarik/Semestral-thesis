const fs = require('fs');
const HDWalletProvider = require("truffle-hdwallet-provider");
const secrets = JSON.parse(
  fs.readFileSync(".secrets").toString().trim()
);

module.exports = {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "1337",       // Any network (default: none)
     },
}