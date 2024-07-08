import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="../assets/images/compress/Gradient_v3_compress.avif" as="image"/>
        <link rel="preload" href="../assets/IBMPlexMono/IBMPlexMono-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}