import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import { getHeader } from "../../sanity.query";



export default function App({ Component, pageProps }: AppProps) {
console.log("-------------------------",pageProps);

  return <Layout headerdata={pageProps.headerdata}><Component {...pageProps} /></Layout>;
}

export async function getStaticProps() {
  const headerdata = await getHeader();
  console.log("==================",headerdata);
  
  return {
    props: {
      headerdata
    }
  };
}