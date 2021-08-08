App = {
    initMessage: "",
    loading: false,
    contracts: {},

    messageArea: $('#message > span'),
    newMessageField: $('#newMessage'),
  
    load: async () => {
      await App.loadWeb3();
      await App.loadAccount();
      await App.loadContract();
      await App.subscribeToEvents();
      await App.render();
    },
  
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        App.web3Provider = ethereum;
        window.web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          await ethereum.eth_requestAccounts();
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */});
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider;
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      web3.eth.getAccounts()
        .then(data => {
          App.account = web3.eth.defaultAccount = data[0];
        }
      );
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const hello = await $.getJSON('HelloLogchain.json');
      App.contracts.Hello = TruffleContract(hello);
      App.contracts.Hello.setProvider(App.web3Provider);
  
      // Hydrate the smart contract with values from the blockchain
      App.Hello = await App.contracts.Hello.deployed();
    },

    subscribeToEvents: async () => {
      let options = {
        fromBlock: 0,//'latest',
        address: App.Hello.address,
        topics: [],
      };

      const logSubscription = web3.eth.subscribe('logs', options);
      logSubscription.on(
        'data',
        event => {
          const decoded = web3.eth.abi.decodeParameters(['string'], event.data);
          App.renderMessage(decoded[0]);
        }
      );
    },

    render: async () => {
      // Prevent double render
      if (App.loading) {
        return;
      }
  
      // Update app loading state
      App.isLoading();
  
      // Render Account
      if (App.account !== undefined) {
        $('#account > span').html(App.account);
      }
  
      // Render Message
      App.renderMessage(App.initMessage);
  
      // Update loading state
      App.isLoading(false);
    },
  
    renderMessage: (message) => {
      App.messageArea.html(message);

      App.enableNewMessageField();

      if (App.account !== undefined) {
          $('#form').show();
      }
    },

    setMessage: async () => {
        App.isLoading();

        App.disableNewMessageField();

        const newMessage = App.newMessageField.val();
        await App.Hello.setMessage(
          newMessage,  { from:  web3.eth.defaultAccount });

        App.clearMessageField();
    },

    clearMessageField: () => App.newMessageField.val(""),
    enableNewMessageField: () => App.newMessageField.prop('disabled', false),
    disableNewMessageField: () => App.newMessageField.prop('disabled', true),
  
    isLoading: (value) => {
      value = value | true;

      App.loading = value;
      const $loader = $('#loader');
      const $content = $('#content');

      if (value === true) {
        $loader.show();
        $content.hide();
      } else {
        $loader.hide();
        $content.show();
      }
    }
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })