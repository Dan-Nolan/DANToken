const bre = require("@nomiclabs/buidler");

async function main() {
  const DANToken = await ethers.getContractFactory("DANToken");
  const initialSupply = 100n * 10n ** 18n;
  const token = await DANToken.deploy(initialSupply.toString());

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
