import { AppProps } from "next/app";
import { ConfigProvider, ThemeConfig } from "antd";

import "src/style/root.scss";

import { ReduxWrapper } from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const antdTheme: ThemeConfig = {
    token: {
      colorPrimary: "#333",
      colorBorder: "#dadada",
    },
    components: {},
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default ReduxWrapper.withRedux(MyApp);
