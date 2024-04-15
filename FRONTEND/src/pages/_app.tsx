// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";

function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
}: AppProps & { headerdata: any; footerdata: any }) {
  return (
    <PopupProvider>
      
      <Layout headerdata={headerdata} footerdata={footerdata}>
        <Component {...pageProps} />
      </Layout>
    </PopupProvider>
  );
}

MyApp.getInitialProps = async () => {
  const headerdata = await getHeader();
  const footerdata = await getFooter();
  return { headerdata, footerdata };
};

export default MyApp;
