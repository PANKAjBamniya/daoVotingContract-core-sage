const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const members = [
    "0x8bC3309D0104B8135981c714C485e8de0FA36193", // Replace with real member addresses
    "0x013C695D1A4B6Ddc3792e73a052212CB74760fB4"
  ];

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
