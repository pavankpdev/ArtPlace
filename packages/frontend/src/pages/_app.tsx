import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";

// THEME
import ArtPlaceTheme from "@/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={ArtPlaceTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp;