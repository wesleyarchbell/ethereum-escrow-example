var approvalContract = artifacts.require("ApprovalContract")

module.exports = function(deployer) {
    deployer.deploy(approvalContract);
}