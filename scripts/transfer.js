const bre = require("@nomiclabs/buidler");

async function main() {
  const DANToken = await ethers.getContractFactory("DANToken");

  const contract = DANToken.attach("0xbAA798e5E9488c73968cc4720CddD774DAfc6120");

  const signers = await ethers.getSigners();
  const signer1 = signers[0];
  const signer2 = signers[1];

  const halfSupply = (50n * 10n ** 18n).toString();
  const signer1Address = await signer1.getAddress();
  const signer2Address = await signer2.getAddress();
  await contract.transfer(await signer2.getAddress(), halfSupply);

  const balance1 = await contract.balanceOf(signer1Address);
  const balance2 = await contract.balanceOf(signer2Address);

  console.log(ethers.utils.formatEther(balance1));
  console.log(ethers.utils.formatEther(balance2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
