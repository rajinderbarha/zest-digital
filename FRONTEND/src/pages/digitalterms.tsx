import DigitalTerms from '@/components/DigitalTerms'
import Layout from '@/layout'
import React from 'react'
import { getDigitalTerms } from '../../lib/sanity.query'
import { DigitalTermsOfServiceType } from '../../lib/interface'

function digitalterms({ digitaltermsdata }: { digitaltermsdata: DigitalTermsOfServiceType[] }) {




    return (
       
          
                <DigitalTerms data={digitaltermsdata}/>

          
        
    )
}

export default digitalterms

export async function getStaticProps() {
  const digitaltermsdata = await getDigitalTerms();
  return {
    props: {    
        digitaltermsdata
    }
  };
}


