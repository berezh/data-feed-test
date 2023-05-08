import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ReduxWrapper } from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ReduxWrapper.withRedux(MyApp);
