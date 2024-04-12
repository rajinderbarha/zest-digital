import React from 'react';
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import { getOurServicesSectionData} from '../../lib/sanity.query';
import { OurServicesSection } from '../../lib/interface';





export default function Home({ ourServicesData }: { ourServicesData: OurServicesSection[]}) {
  return (
    <>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services  data={ ourServicesData}/>
    </>

  );
}




export async function getStaticProps() {
  const ourServicesData = await getOurServicesSectionData();     
  return {
      props: {
        ourServicesData
      }
  };
}


