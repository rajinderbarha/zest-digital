import DigitalTerms from '@/components/DigitalTerms'
import Layout from '@/layout'
import React from 'react'
import { getSingleTerms } from '../../../lib/sanity.query'
import { DigitalTermsOfServiceType } from '../../../lib/interface'

function SingletermsAndConditions({ singletermsdata }: { singletermsdata: DigitalTermsOfServiceType[] }) {


console.log("digital terms========================================", singletermsdata)

    return (
       
          
                <DigitalTerms data={singletermsdata}/>

          
        
    )
}

export default SingletermsAndConditions

export async function getServerSideProps({ params }:{params:{slug:string}}) {
  const { slug } = params;

  const singletermsdata = await getSingleTerms(slug);
  return {
      props: {
        singletermsdata
      }
  };

 
}

