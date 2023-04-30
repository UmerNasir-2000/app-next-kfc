import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "@/theme";
import LayoutProvider from "@/providers/layout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <LayoutProvider>
                <Component {...pageProps} />
            </LayoutProvider>
        </ChakraProvider>
    )
}
