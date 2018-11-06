
var Hello_mshk_top;
var Hello_mshk_top_json;

$(document).ready(function () {
  var web3Provider = new Web3.providers.HttpProvider("http://192.168.33.88:8545");
  var web3 = new Web3(web3Provider);

    $.getJSON ("./build/contracts/Hello_mshk_top.json", function (data,status){  
        console.log("是是不是成功读到数据"+status);
        Hello_mshk_top_json = data;
    });
    Hello_mshk_top = web3.eth.contract(Hello_mshk_top_json.abi).at("0x4cca54411d33ccdb15616e421e4e7db64ce9e1b9");
    Hello_mshk_top.say();

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