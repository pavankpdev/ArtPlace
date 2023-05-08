// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ARTPToken is ERC20, ERC20Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
      bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");


constructor(address minter, address burner) ERC20("ArtPlace Token", "ARTP") {
        _mint(msg.sender, 10000000 * 10 ** decimals());
        _grantRole(MINTER_ROLE, minter);
        _grantRole(BURNER_ROLE, burner);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn( uint256 amount) public onlyRole(BURNER_ROLE) override {
        _burn(msg.sender, amount);
    }
}
