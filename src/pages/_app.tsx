import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { FunctionComponent } from "react";
import { Fragment } from "react";
import { Oswald } from "@next/font/google";

// eslint-disable-next-line @typescript-eslint/quotes
const oswald = Oswald({ weight: "400", subsets: ["latin"] });

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
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
