import React from 'react';
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';





export default function Home({ ourServices }: { ourServices: TermsAndConditionsType[] }) {
  return (
    <>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services  data={ ourServices[0]}/>
    </>

  );
}




export async function getStaticProps() {
  const ourServicesData = await getTermsndConditionsData();
  return {
      props: {
        ourServicesData
      }
  };
}


