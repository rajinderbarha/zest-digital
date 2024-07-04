import Casestudyintro from "@/components/caseStudy/CaseStudyIntro";
import Gross_profit from "@/components/caseStudy/gross_profit";
import Instrumental from "@/components/caseStudy/instrumental/instrumental_main";
import { getCasestudyData } from "../../../lib/sanity.query";
import { CasestudyType } from "../../../lib/interface";

function Casestudy({ Casestudy }: { Casestudy: CasestudyType[] }) {
  const caseStudy = Casestudy[0]?.section

  return <div className="Body_padding">
    <Casestudyintro data={Casestudy[0].hero} />
    {caseStudy.map((item: any, index: number) => {
      let position = "";
      let dynamicClass = "";

      if (index === 2 || index === 3) {
        dynamicClass = "special-instrumental";
      }
      else if (index === 4) {
        dynamicClass = "conversations";
      }
      else if (index === 5) {
        dynamicClass = "project-window";
      }

      return (
        <div key={index} className={position}>
          <Gross_profit data={item} />
          <Instrumental data={item} dynamicClass={dynamicClass} />
        </div>
      );
    })}
  </div>
}
export default Casestudy;

export async function getStaticProps() {
  const Casestudy = await getCasestudyData();

  return {
    props: { Casestudy },
  };
}
