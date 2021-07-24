//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract HelloBlockchain {

    string message;

    constructor(string memory initMessage) {
        setMessage(initMessage);
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
