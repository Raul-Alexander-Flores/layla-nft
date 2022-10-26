const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a Layla
  const metadataURL = "ipfs://QmRBGTJ8AjtwAEzQz6cc97UAVjo9UfQVMiU7vaXxXFkDmD/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so laylaContract here is a factory for instances of our Layla contract.
  */
  const laylaContract = await ethers.getContractFactory("Layla");

  // deploy the contract
  const deployedLaylaContract = await laylaContract.deploy(metadataURL);

  await deployedLaylaContract.deployed();

  // print the address of the deployed contract
  console.log("Layla Contract Address:", deployedLaylaContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });