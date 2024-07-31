import HeroSection from "@/components/HeroSection";
import HomeGrowthCard from "@/components/HomeGrowthCard";
import Logo_moving from "@/common/Logo_moving";
import Services from "@/common/Services";
import { getHomepageData } from "../../lib/sanity.query";
import { HomepageProps } from "../../lib/interface";
import Head from "next/head";

export default function Home({ homepageData }: HomepageProps) {
  const { growRevenue, TransformResults } = homepageData[0] || {};

  return <>

    <Head>
      <title>Zest Digital: Award-Winning Growth Marketing Agency</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="siteName" property="og:site_name" content="Zest Digital" />
      <meta name="title" property="og:title" content="Zest Digital: Award-Winning Growth Marketing Agency" />
      <meta name="description" property="og:description" content="An award-winning growth marketing agency. Grow revenues faster, more predictably, and at a lower cost, through test-based digital marketing." />
      <meta name="url" property="og:url" content="https://www.zestdigital.com" />
      <meta name="keywords" property="og:keywords" content="zest,digital,growth,grow,marketing,digital,results,solutions,services" />
      <meta name="type" property="og:type" content="website" />
    </Head>

    <div className="Body_padding">
      <HeroSection HeroSecData={growRevenue} />
      <HomeGrowthCard card={TransformResults} />
      <div className="xl:mt-[274px] min-tb:max-tb:mt-[204px] min-tb:max-tb:mb-[106px] lg:mt-[220px] md:mt-[170px] sm:mt-[150px] mt-[215px] xl:mb-[184px] lg:mb-[160px] md:mb-[130px] mb-[70px]">
        <Logo_moving LogoMovdata={TransformResults?.brandList} />
      </div>
      <Services data={TransformResults?.serviceSection} />
    </div>
  </>
}

export async function getStaticProps() {
  try {
    const homepageData = await getHomepageData();
    return {
      props: {
        homepageData,
      },
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      props: {
        homepageData: [],
      },
    };
  }
}
