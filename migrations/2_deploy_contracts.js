var UtilsLib = artifacts.require("./UtilsLib.sol");
var ChainHome = artifacts.require("./ChainHome.sol");

module.exports = function(deployer) {
  deployer.deploy(UtilsLib);
  deployer.link(UtilsLib, ChainHome);
  deployer.deploy(ChainHome);
};
