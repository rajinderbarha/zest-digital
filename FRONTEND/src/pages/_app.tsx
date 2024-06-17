// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";
import { FooterType, HeaderType } from "../../lib/interface";


function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
}: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] }) {
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
