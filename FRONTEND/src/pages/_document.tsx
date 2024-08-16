import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <script
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/26290409.js"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}