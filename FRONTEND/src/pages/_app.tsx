import "@/styles/globals.css";
import App, { AppProps, AppContext } from "next/app";
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

MyApp.getInitialProps = async (appContext: AppContext) => {
  const headerdata = await getHeader();
  const footerdata = await getFooter();

  // Get initial props from App
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, headerdata, footerdata };
};

export default MyApp;
