import GrowthCurve from '@/components/GrowthCurve'
import React from 'react'
import { getSharedCurveData } from '../../lib/sanity.query'
import { GrowthCurveType } from '../../lib/interface'
import { log } from 'console'
function growthcurve({ sharedCurveData }: { sharedCurveData: GrowthCurveType[] }) {
  // console.log("sharedData of growth curve=============///////////////////////////");
  

  

  //   // Accessing properties of growthTrackerData
  //   sharedCurveData.forEach((data, index) => {
  //       console.log(`Growth curve Data ${index + 1}:`);
  //       console.log("Hero Section:", data.growthCurve.heroSection);
  //       console.log("Growth Section:", data.growthCurve.growthSection);
  //       console.log("Solution:", data.growthCurve.solution);
  //       console.log("Banner:", data.growthCurve.banner);
  //   });
  return (
   <>
    <GrowthCurve data={sharedCurveData}/>
   </>
  )
}

export default growthcurve



export async function getStaticProps() {
  const sharedCurveData = await getSharedCurveData();
  return {
      props: {
        sharedCurveData
      }
  };
}

