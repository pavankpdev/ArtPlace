import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";
import { ApolloProvider } from '@apollo/client';
import client from '../gql';

// THEME
import ArtPlaceTheme from "@/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={ArtPlaceTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
      </ApolloProvider>
  )
}

export default MyApp;