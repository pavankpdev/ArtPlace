import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';

import '@nomicfoundation/hardhat-toolbox';

import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.2',
      },
      {
        version: '0.8.0',
      },
      {
        version: '0.8.9'
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC, // get one from https://alchemy.com
      accounts: process.env.DEPLOYER_PRIVATE_KEY
          ? [process.env.DEPLOYER_PRIVATE_KEY as string]
          : undefined,
    },
  },
  namedAccounts: { // named accounts are used by hardhat-deploy to automatically populate the `from` field when a contract is deployed, refer docs for more info
    deployer: {
      default: 0,
      mumbai: 0,
    },
    admin: {
      default: 0,
      mumbai: 0,
    },
    tokenBeneficiary: {
      default: 0,
      mumbai: 0,
    },
    signer: {
      default: 1,
      mumbai: 0,
    },
  },
  paths: {
    sources: 'src',
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },

  verify: {
    etherscan: {
      apiKey: process.env.POLYGON_EXPLORER_API_KEY as string, // visit here to get your API key https://polygonscan.com
    }
  }
};

export default config;