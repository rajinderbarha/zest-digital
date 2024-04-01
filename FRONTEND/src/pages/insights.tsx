// import BlogPage from '@/components/Blog'
import Climate_action from '@/common/Climate_action'
import { HeaderType } from '@/components/Header'
import Filters from '@/components/Insights/Filters'
import Layout from '@/layout'
import React from 'react'
import { getHeaderData } from '.'

const Insights = ({ data }: { data: HeaderType[] }) => {
    return (
        <div>
            <Layout data={data}>
                <Filters />
                <Climate_action />
            </Layout>

        </div>
    )
}

export default Insights


export async function getStaticProps() {
    const data = await getHeaderData();
    return {
      props: {
        data
      }
    };
  }
