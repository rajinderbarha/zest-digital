import React from "react";
import HeroSection from "@/components/HeroSection";
import HomeGrowthCard from "@/components/HomeGrowthCard";
import Logo_moving from "@/common/Logo_moving";
import Services from "@/common/Services";
import { getHomepageData } from "../../lib/sanity.query";
import { HomepageProps } from "../../lib/interface";

export default function Home({ homepageData }: HomepageProps) {
  const { growRevenue, TransformResults } = homepageData[0] || {};

  return (
    <>
      <HeroSection HeroSecData={growRevenue} />
      <HomeGrowthCard card={TransformResults}  />
      <div className="xl:mt-[274px] lg:mt-[220px] md:mt-[170px] sm:mt-[150px] mt-[70px] xl:mb-[184px] lg:mb-[160px] md:mb-[130px] mb-[70px]">
        <Logo_moving LogoMovdata={TransformResults?.brandList} />
      </div>
      <Services data={TransformResults?.serviceSection} />
    </>
  );
}

export async function getServerSideProps() {
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
