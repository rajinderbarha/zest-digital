import Logo_moving from "@/common/Logo_moving";
import Section_Main from "@/components/SolutionsPage/Section_Main";
import Solution_Banner from "@/components/SolutionsPage/Solution_Banner";
import { getSolutionData } from "../../../lib/sanity.query";
import { SolutionProps } from "../../../lib/interface";
import Head from "next/head";

function solutions({ solution }: { solution: SolutionProps[] }) {
  return <>
    <Head>
      <title>Growth Marketing Solutions — Zest Digital</title>
      <meta name="title" property="" content="Growth Marketing Solutions — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/solutions" />
      <meta name="keywords" property="og:keywords" content="Digital, zest, Full-stack, growth-marketing, solutions" />
      <meta name="description" property="og:description" content="Growth marketing solutions engineered to help scale your business. Choose from all-inclusive or on-demand support across SEO, PPC, LinkedIn, and more." />
    </Head>

    <div className="Body_padding">
      <Solution_Banner data={solution[0].hero} />
      <Section_Main data={solution[0].transform} card={solution[0].growth} />
      <div className="xl:mt-[256px] lg:mt-[200px] md:mt-[150px] min-tb:max-tb:mb-[100px] min-tb:max-tb:mt-[219px] sm:mt-[140px] mt-[215px] xl:mb-[200px] lg:mb-[175px] md:mb-[130px] sm:mb-[70px] mb-[80px]">
        <Logo_moving LogoMovdata={solution[0].brandList} />
      </div>
    </div>
  </>
}
export default solutions;

export async function getStaticProps() {
  const solution = await getSolutionData();
  return {
    props: { solution }
  };
}
