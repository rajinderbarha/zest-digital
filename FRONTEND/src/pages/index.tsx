import React from "react";
import HeroSection from "@/components/HeroSection";
import HomeGrowthCard from "@/components/HomeGrowthCard";
import Logo_moving from "@/common/Logo_moving";
import Services from "@/common/Services";
import { getHomepageData } from "../../lib/sanity.query";
import { HomepageProps } from "../../lib/interface";

export default function Home({ homepageData }: HomepageProps) {
  return (
    <>
      <HeroSection HeroSecData={homepageData[0].growRevenue} />
      <HomeGrowthCard card={homepageData[0].TransformResults} />
      <div className="xl:mt-[274px] lg:mt-[220px] md:mt-[170px] sm:mt-[150px] mt-[110px] xl:mb-[184px] lg:mb-[160px] md:mb-[130px] mb-[100px]">
        <Logo_moving LogoMovdata={homepageData[0].TransformResults.brandList} />
      </div>
      <Services data={homepageData[0].TransformResults.serviceSection} />
    </>
  );
}

export async function getServerSideProps() {
  const homepageData = await getHomepageData();
  return {
    props: {
      homepageData,
    },
  };
}
