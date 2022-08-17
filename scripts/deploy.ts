import { ethers } from "hardhat";
import { multisigSol } from "../typechain-types";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  let [add1, add2, add3, add4, addr5] = await ethers.getSigners();
  
  // console.log("our address", add1.address);

  // const lockedAmount = ethers.utils.parseEther("1");

  const FactoryMultiSig = await ethers.getContractFactory("MultiSigFactory");
  const factoryMultiSig = await FactoryMultiSig.deploy();

  await factoryMultiSig.deployed();

  // const function1 = await factoryMultiSig.cloneMultiSig(
  //   [
  //     add1.address,
  //     add2.address,
  //     add3.address,
  //     add4.address,
  //   ] 
  // );

  // const function2 = await factoryMultiSig.ClonedAddresses();

  
  
  //0xa16e02e87b7454126e5e10d957a927a7f5b5d2be
  // const function1Data = await (await function1.wait()).logs[0].topics;
  //   console.log("function", add1.address);
  

 // console.log("multisigFactoryAddress:", factoryMultiSig.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
