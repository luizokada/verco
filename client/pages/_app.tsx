import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import customTheme from "../styles/theme";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <NextUIProvider theme={customTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
