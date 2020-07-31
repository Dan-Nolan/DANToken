const bre = require("@nomiclabs/buidler");

async function main() {
  const DANToken = await ethers.getContractFactory("DANToken");

  const contract = DANToken.attach("0xbAA798e5E9488c73968cc4720CddD774DAfc6120");

  const signer = (await ethers.getSigners())[0];

  const address = await signer.getAddress();

  const balance = await contract.balanceOf(address);

  console.log(balance);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
