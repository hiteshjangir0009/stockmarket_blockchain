const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xYourContractAddress";
    const StockToken = await ethers.getContractAt("StockToken", contractAddress);

    const [owner] = await ethers.getSigners();
    const balance = await StockToken.balanceOf(owner.address);
    
    console.log(`Owner's Stock Balance: ${ethers.utils.formatUnits(balance, 18)} STK`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
