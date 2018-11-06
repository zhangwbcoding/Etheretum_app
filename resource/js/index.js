
// Import libraries we need.

 
// Import our contract artifacts and turn them into usable abstractions.
//import Hello_mshk_top from './build/contracts/Hello_mshk_top.json'
 
//import { default as contract } from 'truffle-contract'
// MetaCoin is our usable abstraction, which we'll use through the code below.
//var Hello_mshk_top = contract(Hello_mshk_top);
var Hello_mshk_top;

$(document).ready(function () {
  var web3Provider = new Web3.providers.HttpProvider("http://192.168.33.88:8545");
  var web3 = new Web3(web3Provider);

  $.getJSON ("./build/contracts/Hello_mshk_top.json", function (data,status){  
      console.log("是是不是成功读到数据"+status);
      alert(data);
      Hello_mshk_top = data;
  });
  //alert(Hello_mshk_top)
  // if (typeof web3 !== 'undefined') {
  //   console.warn("Using web3 detected from external source like Metamask")
  //   // Use Mist/MetaMask's provider
  //   window.web3 = new Web3(web3.currentProvider);
  // } else {
  //   console.warn("No web3 detected. Falling back to http://192.168.33.88:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  //   // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  //   window.web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.33.88:8545"));
  // }
  //alert(web3)
  debugger;
  Hello_mshk_top.setProvider(web3.currentProvider);

  Hello_mshk_top.deployed().then(function(instance) {
        meta = instance;
        return meta.all.call({from: account});
    }).then(function(value){
        self.setStatus(value);
        alert(value);        
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting message. see log.");
    });

});