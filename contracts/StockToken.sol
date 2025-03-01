// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StockToken is ERC20 {
    address public issuer;

    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        issuer = msg.sender;
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
