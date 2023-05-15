import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";
import { ApolloProvider } from '@apollo/client';
import client from '../gql';

// THEME
import ArtPlaceTheme from "@/theme";
import { UserProvider } from '@/context/User';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={ArtPlaceTheme}>
        <UserProvider>
        <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
      </ApolloProvider>
  )
}

export default MyApp;