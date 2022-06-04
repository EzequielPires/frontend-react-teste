import { ChakraProvider } from '@chakra-ui/react';
import { FactProvider } from '../hooks/useFacts';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <FactProvider>
        <Component {...pageProps} />
      </FactProvider>
    </ChakraProvider>
  )
}
export default MyApp
