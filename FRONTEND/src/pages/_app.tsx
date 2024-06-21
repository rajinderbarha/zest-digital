// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getClimateActionData, getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";
import { ClimateAction, FooterType, HeaderType } from "../../lib/interface";
// import { Lato } from 'next/font/google';


// const lato = Lato({
//   weight: ['400', '700', "300"], // Specify the weights you need
//   subsets: ['latin'],     // Specify the subsets you need
// });

function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
  climateActionData
}: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] , climateActionData:ClimateAction}) {
  return (
    <PopupProvider>

      <Layout headerdata={headerdata} footerdata={footerdata}>
        <Component {...pageProps}  />
      </Layout>
    </PopupProvider>
  );
}

MyApp.getInitialProps = async () => {
  const headerdata = await getHeader();
  const footerdata = await getFooter();
  // const climateActionData = await getClimateActionData();
  return { headerdata, footerdata };
};

export default MyApp;
