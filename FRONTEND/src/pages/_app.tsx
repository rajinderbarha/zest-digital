// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getHeader } from "../../sanity.query";

function MyApp({ Component, pageProps, headerdata }: AppProps & { headerdata: any }) {
  return (
    <Layout headerdata={headerdata}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const headerdata = await getHeader();
  return { headerdata };
};

export default MyApp;
