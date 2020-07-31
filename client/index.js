const { abi, bytecode } = require('./artifacts/DANToken');
const ethers = require('ethers');
import "./index.scss";

document.getElementById("deploy").addEventListener('click', () => {
  const value = document.getElementById("initial-supply").value;

  window.ethereum.enable().then(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    const initialSupply = (BigInt(value) * 10n ** 18n).toString();
    factory.deploy(initialSupply).then((txReceipt) => {
      console.log(txReceipt);
    })
  });
});
