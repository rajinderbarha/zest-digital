import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Preload the critical CSS file */}
          <link
            rel="preload"
            href="../components/HeroSection/heroSection.module.css"
            as="style"
          />
      
          <link
            rel="stylesheet"
            href="../components/HeroSection/heroSection.module.css"
          />
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}