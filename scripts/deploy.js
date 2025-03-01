const hre = require("hardhat");

async function main() {
  const StockToken = await hre.ethers.getContractFactory("StockToken");
  const stock = await StockToken.deploy("Tesla Stock", "TSLA", 100);
  await stock.deployed();
  console.log("StockToken deployed to:", stock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
