import type { AppProps } from "next/app";

import "src/style/root.scss";

import { ReduxWrapper } from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ReduxWrapper.withRedux(MyApp);
