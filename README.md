# HelloLogchain
A super basic very first blockchain programming tutorial, using the ethereum log.

This code deploys a very simple smart contract for saving and viewing a message.  The smart contract is written in Solidity, and will run on the Ethereum network.

How does this differ from the HelloBlockchain application?  The primary difference is where we store the message data.  In the HelloBlockchain application, we store the data on the blockchain itself.  With this application, we store the data in an event.  Events are emitted from a contract to signal that something has happened.  In our case, we signal that the message has been changed.  These events are stored in the event log, and so any data that we put into the event is also stored in the event log.  This data can be accessed by subscribing to a particular event type and reading previous and future events, as they are emitted.

The advantage of using the event log to store our data over the blockchain, is that it is significantly cheaper:
| Type | Msg             | Price    |
|------|-----------------|----------|
| Log  | A               | 0.00049  |
| Log  | Lorem ipsum     | 0.000718 |
| Log  | Lorem ipsum X 2 | 0.000956 |
| Tx   | A               | 0.000618 |
| Tx   | Lorem ipsum     | 0.006335 |
| Tx   | Lorem ipsum X 2 | 0.006807 |

As can be seen, using a transaction can cost 7-9 times as much as using the event log.

Is it best practice to use the event log for storing data?  Probably not.  The event log is for logging and emitting events; it is not meant as data storage.  As such, the space on the event log is limitted, with a cap on the number of variables we can store per event.  The best place to store data is probably off-chain storage, with only hashes and signatures being stored in the blockchain.  This is cheap, and allows us to verify that the off-chain data has not be tampered with.  For the purpose of learning to subscribe to events and read the data from an event, we'll just ignore these problems for now!

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
To setup the HelloLogchain application, first we must install the application using NPM.  Run the following command from the HelloLogchain root folder:
>npm install

Next, we need to compile and deploy the smart contract.  Truffle will handle this for us with the following command:
>truffle migrate

## Web Interface
Our application has a basic web interface, which you can access using the following command:
>npm run dev

This will start lite server, a small server we installed earlier as part of our package.

A page will open in your web-browser, displaying the current logged in account id, the current message, and an input field for entering a new message.

If you are not logged into an account, you must do so in MetaMask in order to see the account id and update the message.

Updating the message costs ~30000 gwei, and MetaMask will ask you to confirm this transaction.  Once the message is updated, the page will re-load and display the new message.
