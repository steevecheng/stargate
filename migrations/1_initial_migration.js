const Migrations = artifacts.require("Migrations");
const LPStaking = artifacts.require("LPStaking");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(LPStaking);
};
