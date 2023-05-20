'use client';
import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";
import { ApolloProvider } from '@apollo/client';
import client from '../gql';

// THEME
import ArtPlaceTheme from "@/theme";
import { UserProvider } from '@/context/User';
import {wagmiConfig, chains} from "@/config/provider";
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {WagmiConfig} from "wagmi";

import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={ArtPlaceTheme}>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
      </ApolloProvider>
  )
}

export default MyApp;