import React from 'react';
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import { getHomepageData, getOurServicesSectionData} from '../../lib/sanity.query';
import { OurServicesSection } from '../../lib/interface';





export default function Home({homepageData, ourServicesData }: { ourServicesData: OurServicesSection[],homepageData:any}) {
  
  // console.log("homepadeData==============",homepageData)
  return (
    <>
      <HeroSection data={homepageData[0].growRevenue}/>
      <Growth card={homepageData[0].TransformResults}/>
      <Logo_moving data={homepageData[0].TransformResults.brandList}/>
      <Services  data={ ourServicesData}/>
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
        
      }
  };
}


