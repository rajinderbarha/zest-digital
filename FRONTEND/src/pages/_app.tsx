import "@/styles/globals.css";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layout/index";
import { getFooter, getHeader } from "../../lib/sanity.query";
import { PopupProvider } from "@/context";
import { FooterType, HeaderType } from "../../lib/interface";
import CookieConsent from "@/common/CookieConsent";
import CookieConsentComponent from "@/common/CookieConsent";
import { useEffect } from "react";
import ChatBox from "@/common/ChatBox";

function MyApp({
  Component,
  pageProps,
  headerdata,
  footerdata,
}: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] }) {
  // useEffect(() => {
  //   // Remove the inlineEmbedSelector to allow the chat to appear as a floating icon
  //   (window as any).hsConversationsSettings = {
  //     loadImmediately: true,
  //     enableWidgetCookieBanner: true,
  //     disableAttachment: true,
  //   };

  //   // Load the HubSpot script on the client-side
  //   const script = document.createElement("script");
  //   script.src = "//js-eu1.hs-scripts.com/26290409.js"; // Replace XXXXXX with your HubSpot script ID
  //   script.id = "hs-script-loader";
  //   script.async = true;

  //   // Check if the HubSpot script is already loaded
  //   const existingScript = document.getElementById("hs-script-loader");
  //   if (!existingScript) {
  //     // Append the script to the body if it's not already there
  //     document.body.appendChild(script);
  //   }

  //   // Clean up the script when the component unmounts
  //   return () => {
  //     const scriptElement = document.getElementById("hs-script-loader");
  //     if (scriptElement) {
  //       scriptElement.remove();
  //     }
  //   };
  // }, []);
  return (
    <PopupProvider>
      <Layout headerdata={headerdata} footerdata={footerdata}>
        <Component {...pageProps} />
        <CookieConsentComponent />
        <ChatBox />
      </Layout>
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