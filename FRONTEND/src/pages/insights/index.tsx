import Filters from '@/components/Insights/Filters'
import React from 'react'
import { getInsightsData } from '../../../lib/sanity.query';

const filters = ({insights}:any) => {
  
    return (
        <div>
            <Filters data={insights[0]}/>
        </div>
    )
}

export default filters;

export async function getServerSideProps() {
    const insights = await getInsightsData();
  
    return {
      props: { insights },
    };
  }
