var approvalContract = artifacts.require("ApprovalContract")

module.exports = function(deployer) {
    deployer.deploy(approvalContract).then(() => console.log("CONTRACT ADDRESS: " + approvalContract.address));
}