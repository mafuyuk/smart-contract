pragma solidity ^0.4.18;

contract Greetings {
	string internal message;

	function Greetings() public {
		message = 'Hello Blockchain!';
	}

	function setGreeting(string _message) public {
		message = _message;
	}

	function getGreeting() public view returns (string) {
		return message;
	}
}
