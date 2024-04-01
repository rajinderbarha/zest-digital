import { HeaderType } from '@/components/Header'
import LearnToGrow from '@/components/resourcesPage/learnToGrow'
import Resourcesbanner from '@/components/resourcesPage/resourcesbanner/resourcesbanner'
import Layout from '@/layout'
import React from 'react'
import { getHeaderData } from '.'
// import LearnToGrow from '../components/resourcesPage/learnToGrow'
function resources({ data }: { data: HeaderType[] }) {
    return (
        <>
            <Layout data={data}>
                <Resourcesbanner />
                <LearnToGrow />
            </Layout>
        </>
    )
}

export default resources


export async function getStaticProps() {
    const data = await getHeaderData();
    return {
      props: {
        data
      }
    };
  }

