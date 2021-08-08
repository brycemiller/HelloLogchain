//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract HelloLogchain {

    event MessageChanged(string message);

    constructor(string memory initMessage) {
        setMessage(initMessage);
    }

    function setMessage(string memory newMessage) public {
        emit MessageChanged(newMessage);
    }
}
