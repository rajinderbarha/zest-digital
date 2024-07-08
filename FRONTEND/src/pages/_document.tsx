import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/Gradient_v3_compress.avif"
            as="image"
          />
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}