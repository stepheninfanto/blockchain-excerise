const { ethers } = require("ethers");

const ethConnect = async ()=>{

// const provider = new ethers.providers.Web3Provider(window.ethereum);
ethers.getDefaultProvider( { projectId, projectSecret } ) 
// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);
const daiAddress = "dai.tokens.ethers.eth";

const daiAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
var txList;
await daiContract.queryFilter(filterFrom, 15039655, 15039665)
.then((transactionList)=>{txList =transactionList;})
.catch((error)=>console.log(error));

return txList;

}

module.exports.ethConnect =ethConnect;