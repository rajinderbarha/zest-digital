import "@/styles/globals.css";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layout/index";
import { getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";
import { FooterType, HeaderType } from "../../lib/interface";
import Head from "next/head";

function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
}: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] }) {
  return (
    <PopupProvider>
      <Head>
        <title>Zest Digital: Award-Winning Growth Marketing Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="siteName" property="og:site_name" content="Zest Digital" />
        <meta name="title" property="og:title" content="Zest Digital: Award-Winning Growth Marketing Agency" />
        <meta name="description" property="og:description" content="An award-winning growth marketing agency. Grow revenues faster, more predictably, and at a lower cost, through test-based digital marketing." />
        <meta name="url" property="og:url" content="https://www.zestdigital.com" />
        <meta name="keywords" property="og:keywords" content="zest,digital,growth,grow,marketing,digital,results,solutions,services" />
        <meta name="type" property="og:type" content="website" />
      </Head>
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
