# HelloBlockchain
A super basic very first blockchain programming tutorial

## Dependencies
### Node
node -v

### Truffle
npm install -g truffle

### Ganache

## Setup
npm install

truffle migrate

truffle console

hello = await HelloBlockchain.deployed()
>undefined
hello.getMessage()
>'Hello, Blockchain!'
hello.setMessage("Hello, Etherium Network!")
>{
  tx: '0x1eac0006156889f9f6636f053f04a0a36e4f2b292eafb1be299b05fe51595bc9',
  receipt: {
    transactionHash: '0x1eac0006156889f9f6636f053f04a0a36e4f2b292eafb1be299b05fe51595bc9',
    transactionIndex: 0,
    blockHash: '0x89cf376f09e0da10a7641b01bb741abc4b8597808afa42db0b9c19b2118a3213',
    blockNumber: 6,
    from: '0xba9fe153bffcb03686d2f8d95c862e1d24a2ae37',
    to: '0x55504b5e20aef90801808d6da37539c27a2bfe8e',
    gasUsed: 29770,
    cumulativeGasUsed: 29770,
    contractAddress: null,
    logs: [],
    status: true,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    rawLogs: []
  },
  logs: []
}
hello.getMessage()
>'Hello, Etherium Network!'
