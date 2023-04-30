# ArtPlace - An Exclusive NFTs Marketplace

ArtPlace is a decentralized NFT marketplace built on top of Ethereum blockchain. It enables artists to showcase their artwork as NFTs and collectors to purchase them using cryptocurrency. The marketplace is powered by React, NodeJS, GraphQL, TypeScript, Solidity, EVMIndex, MongoDB, and Hardhat.

## Monorepo

This project is structured as a monorepo, meaning that it contains multiple packages. The two packages in this repo are `server` and `client`. The `server` package contains the server-side code, which includes the GraphQL API and the Solidity contracts. The `client` package contains the client-side code, which includes the React app.

## Installation

To install and run the project, you need to have Node.js and MongoDB installed on your machine.

To install the project and its dependencies, run the following commands:

```
npm install
```

or

```
yarn install
```

or

```
pnpm install
```

## Start Server

To start the server, run the following commands:

```
cd packages/server
npm start
```

or

```
cd packages/server
yarn start
```

or

```
cd packages/server
pnpm start
```

The server will start running at http://localhost:4000.

## Start Client

To start the client, run the following commands:

```
cd packages/client
npm start
```

or

```
cd packages/client
yarn start
```

or

```
cd packages/client
pnpm start
```

The client will start running at http://localhost:3000.

## Tech Stack

- React
- NodeJS
- GraphQL
- TypeScript
- Solidity
- EVMIndex
- MongoDB
- Hardhat
