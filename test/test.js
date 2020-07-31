const { assert } = require("chai");

describe("DANToken", function() {
  let token;
  let signer1;
  let signer2;
  const initialSupply = (100n * 10n ** 18n).toString();
  beforeEach(async () => {
    const signers = await ethers.getSigners();
    signer1 = signers[0];
    signer2 = signers[1];
    const DANToken = await ethers.getContractFactory("DANToken");
    token = await DANToken.deploy(initialSupply);
  });

  it("should have an initial supply at the signer address", async function() {
    const address = await signer1.getAddress();
    assert.equal(await token.balanceOf(address), initialSupply);
  });

  describe('after a transfer of half', () => {
    const halfSupply = (50n * 10n ** 18n).toString();
    beforeEach(async () => {
      const signer2Address = await signer2.getAddress();
      await token.transfer(signer2Address, halfSupply);
    });

    it("signer1 should have half", async () => {
      const address = await signer1.getAddress();
      assert.equal(await token.balanceOf(address), halfSupply);
    });

    it("signer2 should have half", async () => {
      const address = await signer2.getAddress();
      assert.equal(await token.balanceOf(address), halfSupply);
    });
  });
});
