
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { any } from "hardhat/internal/core/params/argumentTypes";
require("dotenv").config();

type HttpNetworkAccountsUserConfig = any;
const config: HardhatUserConfig = {
solidity: "0.8.9",
networks: {
  hardhat:{
    forking: {
      //@ts-ignore
      url: "https://ropsten.infura.io/v3/a5f8041819384497bef4f2a9f887481d",
     }
   },
  ropsten: {
    url: process.env.ROPSTEN_URL,
    accounts: [process.env.PRIVATE_KEY] as HttpNetworkAccountsUserConfig | undefined,
  }
}
};

export default config;