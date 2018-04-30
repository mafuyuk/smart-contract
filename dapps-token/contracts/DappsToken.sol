pragma solidity ^0.4.23;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract DappsToken is StandardToken {
  string public name = "DappsToken";
  string public symbol = "DTKN";
  uint public decimals = 18;

  constructor(uint256 _initialSupply) public {
    totalSupply_ = _initialSupply;
    balances[msg.sender] = _initialSupply;
  }
}
