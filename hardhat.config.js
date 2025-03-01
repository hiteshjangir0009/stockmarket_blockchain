require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.28",  // Add this line
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Y-m-h2z-OLLFnFM5TtFuYOD9wqfTnsKi",
      accounts: ["7c87a9020b9638e1a953e34b796c0d5ee25e4f2538b06547c5dca97d74986c19"]
    },
  },
};
