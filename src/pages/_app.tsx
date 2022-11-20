import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { FunctionComponent } from "react";
import { Fragment } from "react";
import { Oswald } from "@next/font/google";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/quotes
const oswald = Oswald({ weight: "400", subsets: ["latin"] });

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <link href={`/manifest.json`} rel={`manifest`} />
        <meta content={`#ff6464`} name={`theme-color`} />
        <link href={`/logo512.png`} rel={`apple-touch-icon`} />
        <meta content={`#ff6464`} name={`apple-mobile-web-app-status-bar`} />
      </Head>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        html {
          font-family: ${oswald.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
