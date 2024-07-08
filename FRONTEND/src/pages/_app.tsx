import "@/styles/globals.css";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layout/index";
import { getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";
import { FooterType, HeaderType } from "../../lib/interface";
import localFont from 'next/font/local';

const ibmPlexMono = localFont({
  src: [
    {
      path: '../assets/IBMPlexMono/IBMPlexMono-SemiBold.ttf',
      weight: '600',
      
    },
    {
      path: '../assets/IBMPlexMono/IBMPlexMono-Bold.ttf',
      weight: '700',
    },
    {
      path: '../assets/IBMPlexMono/IBMPlexMono-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/IBMPlexMono/IBMPlexMono-Regular.ttf',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
}: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] }) {
  return (
    <PopupProvider>
       <div className={`${ibmPlexMono.variable}`}>
      <Layout headerdata={headerdata} footerdata={footerdata}>
        <Component {...pageProps} />
      </Layout>
      </div>
    </PopupProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const headerdata = await getHeader();
  const footerdata = await getFooter();

  // Get initial props from App
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, headerdata, footerdata }
};

export default MyApp;
