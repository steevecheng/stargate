const Migrations = artifacts.require("Migrations");
const LPStaking = artifacts.require("LPStaking");
const StargateToken = artifacts.require("StargateToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(LPStaking);
  deployer.deploy(StargateToken, "StargateToken", "STG", "0x8731d54E9D02c286767d56ac03e8037C07e01e98", "1", "1")
};
