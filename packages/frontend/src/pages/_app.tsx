import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";

// THEME
import ArtPlaceTheme from "@/theme";
import { UserProvider } from '../UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={ArtPlaceTheme}>
        <UserProvider>
        <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
  )
}

export default MyApp;