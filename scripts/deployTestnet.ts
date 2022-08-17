import { ethers } from "hardhat";
import { multisigSol } from "../typechain-types";

async function main() {
 
  

 const amount = ethers.utils.parseEther("1");

  const MultiSig = await ethers.getContractFactory("MultiSig");
  const multiSig = await MultiSig.deploy([
    "0x637CcDeBB20f849C0AA1654DEe62B552a058EA87",
    "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
    "0x3B2200b3DfA63D121D475f6a406A0D6d205251B6"
  ]);

  await multiSig.deployed();
  const balance = await multiSig.address;
  console.log("our contract address", balance);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
