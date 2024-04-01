import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getHeader } from "../../sanity.query";



export default function App({ Component, pageProps }: AppProps) {

  return <Layout headerdata={pageProps.headerdata}><Component {...pageProps} /></Layout>;
}

export async function getStaticProps() {
  const headerdata = await getHeader();
  return {
    props: {
      headerdata
    }
  };
}