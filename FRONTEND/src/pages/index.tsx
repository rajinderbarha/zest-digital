import React from "react";
import HeroSection from "@/components/HeroSection";
import Growth from "@/components/Growth";
import Logo_moving from "@/common/Logo_moving";
import Services from "@/common/Services";
import {
  getHomepageData,
  getOurServicesSectionData,
} from "../../lib/sanity.query";
import { OurServicesSection } from "../../lib/interface";

export default function Home({
  homepageData,
  ourServicesData,
}: {
  ourServicesData: OurServicesSection[];
  homepageData: any;
}) {
  console.log("homepadeData==============", homepageData);
  return (
    <>
      <HeroSection data={homepageData[0].growRevenue} />
      <Growth card={homepageData[0].TransformResults} />
      <div className="xl:mt-[274px] lg:mt-[220px] md:mt-[170px] sm:mt-[150px] mt-[110px] xl:mb-[184px] lg:mb-[160px] md:mb-[130px] mb-[100px]">
        <Logo_moving data={homepageData[0].TransformResults.brandList} />
      </div>
      <Services data={homepageData[0].TransformResults.serviceSection} />
    </>
  );
}

export async function getStaticProps() {
  const homepageData = await getHomepageData();
  const ourServicesData = await getOurServicesSectionData();
  return {
    props: {
      homepageData,
      ourServicesData,
    },
  };
}
