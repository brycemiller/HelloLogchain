# HelloBlockchain
A super basic very first blockchain programming tutorial.

This code deploys a very simple smart contract for saving and viewing a message.  The smart contract is written in Solidity, and will run on the Ethereum network.

You might be wondering what a possible use case could be for such a simple application?  Well, we can use it to store and display a simple operative status - is your application operational? or are systems down?

But remember, even though this is a very simple smart contract, with just a few adjustments it can become a more sophisticated application, such as a blog, digital wallet, or chat application.

## Dependencies
Before deploying and interacting with the smart contract, the following dependencies must be installed.

### Node & NPM
NPM is the standard package manager for Node, a popular JavaScript runtime.  We will use NPM to install the Truffle dependency and also to install the application.

We can check if we already have Node installed by running the following command:
>node -v

If Node is not already installed, then you can download it from the [NodeJS website](https://nodejs.org).

### Truffle
[Truffle](https://www.trufflesuite.com/) provides tools for developing Ethereum smart contracts using Solidity.  The Truffle toolset will help us to compile our smart contract, as well as test and deploy it.  The Truffle console will allow us to interact with our smart contract without building a web interface.

Truffle can be installed using NPM:
>npm install -g truffle

### Ganache
[Ganache](https://www.trufflesuite.com/ganache) provides a blockchain network that runs on your local machine.  You can deploy the smart contract to this network and play around with it safe in the knowledge that it won't be on the _real_ Ethereum network.

Ganache automatically creates ten test users with 100 test Ether each so we can pay for the deployment of the contract and any other transactions.

Simply download and run the Ganache installer, and "Quickstart" an Ethereum network to begin.

### MetaMask
[MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) is a Chrome browser extension that enhances the browser so that it can connect to a blockchain network.

We can use MetaMask to manage our own personal account, as well the test accounts created by Ganache.

## Setup
To setup the HelloBlockchain application, first we must install the application using NPM.  Run the following command from the HelloBlockchain root folder:
>npm install

Next, we need to compile and deploy the smart contract.  Truffle will handle this for us with the following command:
>truffle migrate

## Test
We can now test the smart contract using the Truffle console.  Start the console using the following command:
>truffle console

Once you are connected, you should see the following prompt:
>truffle(development)>

First, get the contract interface:
>let hello = await HelloBlockchain.deployed()

Now, let's try calling the two functions:
>hello.getMessage()
>\>'Hello, Blockchain!'

>hello.setMessage("Hello, Etherium Network!")
>hello.getMessage()
>\>'Hello, Etherium Network!'

Our smart contract has successfully been deployed to our local Ethereum blockchain network!

## Web Interface
Our application has a basic web interface, which you can access using the following command:
>npm run dev

This will start lite server, a small server we installed earlier as part of our package.

A page will open in your web-browser, displaying the current logged in account id, the current message, and an input field for entering a new message.

If you are not logged into an account, you must do so in MetaMask in order to see the account id and update the message.

Updating the message costs ~30000 gwei, and MetaMask will ask you to confirm this transaction.  Once the message is updated, the page will re-load and display the new message.