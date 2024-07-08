import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .hero_banner {
                background-repeat: no-repeat;
                background-size: cover;
                background-position: bottom;
                background-color: #191615;
                position: relative;
              }

             .hero_custom_border{
               position: relative;
             }
               .hero_video_class {
  position: relative;
  z-index: 11;
}
  .hero_custom_border:before, .hero_custom_border:after{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -2px;
  z-index: 0;
}
  
.hero_custom_border:before {
  background: linear-gradient(
    115deg,
    #a2ff8f 0%,
    transparent 64%,
    transparent 54%,
    transparent -256%
  );
}
.hero_custom_border:after {
  background: linear-gradient(
    -78deg,
    #000000 0%,
    transparent 28%,
    transparent 148%,
    transparent -387%
  );
}
  
@media only screen and (min-width: 768px) {
  .hero_marketing_agency_logo_1 {
    display: block;
  }

  .hero_marketing_agency_logo_2 {
    display: none;
  }
          }
  .hero_banner_btn button {
  font-size: 16px;
  width: max-content;
  padding-left: 25px;
  padding-right: 25px;
  height: 40px;
}
  @media only screen and (min-width: 1280px) {
  .hero_banner {
    padding-top: 130px;
    padding-bottom: 110px;
  }

  .hero_banner_text {
    font-size: 55px;
    line-height: 75px;
  }
}
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}