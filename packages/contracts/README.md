# ArtPlace Contracts

This repository contains the Hardhat Ethereum development environment for the development, testing and deployment of the ArtPlace Smart Contracts.

## Overview
This project utilizes the `hardhat-deploy` plugin for easy deployment script writing. The TypeScript deployment scripts are located in the `deploy` folder and should have an attached `tags` array. This `tags` array can be later invoked to deploy a group of contracts. You can find an example in `deploy/Lock`.

## Getting started

-   Install dependencies

```sh
npm i 
# or
yarn
# or
pnpm install
```

-   Create `.env` file

```sh
cp .example.env .env
```
### Compile
```sh
npm run compile
# or
yarn compile
# or
pnpm compile
```

### Run Tests

```sh
npm run test
# or
yarn test
# or
pnpm test
```

### Deploy to Polygon Testnet

```sh
npm run deploy:mumbai --tags <tags>
# or
yarn deploy:mumbai --tags <tags>
# or
pnpm deploy:mumbai --tags <tags>
```
