import GrowthEnginePage from '@/components/GrowthEnginePage'
import React from 'react'
import { getSharedEngineData } from '../../lib/sanity.query';
import { GrowthEngineType } from '../../lib/interface';

function growthengine({ sharedEngineData }: { sharedEngineData: GrowthEngineType[] }) {

  // console.log("========================================:",);

  //   // Accessing properties of growthTrackerData
  //   sharedEngineData.forEach((data, index) => {
  //       console.log(`Growth Engine Data ${index + 1}:`);
  //       console.log("Hero Section:", data.growthEngine.heroSection);
  //       console.log("Growth Section:", data.growthEngine.growthSection);
  //       console.log("Solution:", data.growthEngine.solution);
  //       console.log("Banner:", data.growthEngine.banner);
  //       // console.log("Signup Form:", data.signupform);   // not needed 
  //   });



  return (
    <>
      <GrowthEnginePage />
    </>
  )
}

export default growthengine




export async function getStaticProps() {
  const sharedEngineData = await getSharedEngineData();
  return {
      props: {
        sharedEngineData
      }
  };
}