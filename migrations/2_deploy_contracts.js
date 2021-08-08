let initMessage = "Hello, Logchain!";
let HelloLogchain = artifacts.require("../HelloLogchain.sol");

module.exports = (deployer) => {
    deployer.deploy(HelloLogchain, initMessage);
};
