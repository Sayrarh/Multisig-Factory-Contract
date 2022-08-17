require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
    
    const CONTRACT_ADDRESS = "0x3B66e47972707429909105d212bf4Bc43EBA258D";
    // lowlevel sending of ether
//     let provider = {
//         PrivateKey: process.env.PRIVATE_KEY as BytesLike,
//         URL: process.env.ROPSTEN_URL,
//       };
 
//  const netWorkProvider= ethers.getDefaultProvider("ropsten", provider.URL);
//  let wallet = new ethers.Wallet(provider.PrivateKey, netWorkProvider);
//  const _value = ethers.utils.parseEther("1");
//   await wallet.sendTransaction({ to: CONTRACT_ADDRESS, value: _value });
 
  

 const amount = ethers.utils.parseEther("0.1");
 
//   "0x637CcDeBB20f849C0AA1654DEe62B552a058EA87",
//      "0x3B2200b3DfA63D121D475f6a406A0D6d205251B6"
//     "0x85f20a6924A61904AB44243C7e2c771B3bE46734",


 
 const MultiSig = await ethers.getContractAt("IMultisig", CONTRACT_ADDRESS);

 const tosinAddress = "0x637CcDeBB20f849C0AA1654DEe62B552a058EA87";
 await helpers.impersonateAccount(tosinAddress);
 const impersonatedSignertosin = await ethers.getSigner(tosinAddress);
 

 const ayoAddress = "0x3B2200b3DfA63D121D475f6a406A0D6d205251B6";
 await helpers.impersonateAccount(ayoAddress);
 const impersonatedSignerAyo = await ethers.getSigner(ayoAddress);
 
 const presidentAddress = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
 await helpers.impersonateAccount(presidentAddress);
 const impersonatedSignerPresident = await ethers.getSigner(presidentAddress);

 //console.log("ImpersonatAyo", impersonatedSignerAyo);
 //console.log("impersonatePresident", impersonatedSignerPresident);
 //console.log("impersonatePresident", impersonatedSignertosin);

 //const preBal= await impersonatedSignerPresident.getBalance;
// const ayoThelonelyBoy = await impersonatedSignerAyo.getBalance;

// console.log("President balance", preBal);
 //console.log("lonely boy", ayoThelonelyBoy);


const withdraw = await MultiSig.connect(impersonatedSignertosin).withdrawEther(amount);
const appr1 = await MultiSig.connect(impersonatedSignerAyo).Approve(1);
const appr2 = await MultiSig.connect(impersonatedSignerPresident).Approve(1);


 //const withdraw = await MultiSig.withdrawEther(amount);
 //console.log("everything", withdraw);

 const contractBal = await MultiSig.contractBalance();
 console.log("Our contract balance is", contractBal);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
