import Casestudyintro from "@/components/caseStudy/CaseStudyIntro";
import Gross_profit from "@/components/caseStudy/gross_profit";
import Instrumental from "@/components/caseStudy/instrumental/instrumental_main";
import { getCasestudyData } from "../../../lib/sanity.query";
import { CasestudyType } from "../../../lib/interface";
import Head from "next/head";

function Casestudy({ Casestudy }: { Casestudy: CasestudyType[] }) {
  const caseStudy = Casestudy[0]?.section

  return <>
    <Head>
      <title>Client Case Studies — Zest Digital</title>
      <meta name="title" property="" content="Client Case Studies — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/casestudies" />
      <meta name="keywords" property="og:keywords" content="zest,support, orginizations, growth, partner, investment" />
      <meta name="description" property="og:description" content="350+ organisations served and over 10+ years of rock solid results. View our case studies here." />
    </Head>

    <div className="Body_padding sm-max:mb-[104px] 2xl:mb-[271px] xl:mb-[200px]">
      <Casestudyintro data={Casestudy[0].hero} />
      {caseStudy.map((item: any, index: number) => {
        let position = "";
        let dynamicClass = "";
        let singleClass = "";

        if (index === 2 || index === 3) {
          dynamicClass = "special-instrumental";
        }
        else if (index === 4) {
          dynamicClass = "conversations";
        }
        else if (index === 5) {
          dynamicClass = "project-window";
        }

        if (index === 2) {
          singleClass = "search-visits";
        }
        if (index === 3) {
          singleClass = "coversion-section";
        }

        return (
          <div key={index} className={position}>
            <Gross_profit data={item} />
            <Instrumental data={item} dynamicClass={dynamicClass} singleClass={singleClass} />
          </div>
        );
      })}
    </div>
  </>
}
export default Casestudy;

export async function getStaticProps() {
  const Casestudy = await getCasestudyData();

  return {
    props: { Casestudy },
  };
}
