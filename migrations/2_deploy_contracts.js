let initMessage = "Hello, Blockchain!";
let HelloBlockchain = artifacts.require("../HelloBlockchain.sol");

module.exports = (deployer) => {
    deployer.deploy(HelloBlockchain, initMessage);
};
