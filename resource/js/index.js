
var Hello_mshk_top;
var Hello_mshk_top_json;

$(document).ready(function () {
	var web3Provider = new Web3.providers.HttpProvider("http://192.168.33.88:8545");
	var web3 = new Web3(web3Provider);
	$.getJSON ("./build/contracts/Hello_mshk_top.json", function (data,status){  
    	Hello_mshk_top =web3.eth.contract(data.abi).at("0x05c9f8a1ac1558123a01f5b157d1be3eeae6ca7f");
   	var re = Hello_mshk_top.say();
	debugger;
    });

//   Hello_mshk_top.deployed().then(function(instance) {
//         meta = instance;
//         return meta.all.call({from: account});
//     }).then(function(value){
//         self.setStatus(value);
//         alert(value);        
//     }).catch(function(e) {
//       console.log(e);
//       self.setStatus("Error getting message. see log.");
//     });

});
