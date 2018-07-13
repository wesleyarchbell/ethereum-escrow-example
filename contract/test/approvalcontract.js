const approvalContract = artifacts.require("../../contracts/ApprovalContract.sol");

contract('ApprovalContract', function (accounts) {
    it('Initiates contract', async function() {
       const contract = await approvalContract.deployed();
       const approver = await contract.approver.call();
       assert.equal(approver, 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef, "Approvers don't match!");
    });

    it('Deposit an amount', async function() {
        const contract = await approvalContract.deployed();
        await contract.deposit(accounts[0], {value: 1e+18, sender: accounts[1]});
        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "Amount does not match!");
    });
});