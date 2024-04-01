
import Climate_action from '@/common/Climate_action'
import About_team from '@/components/About_page/About_Team'
import About_banner from '@/components/About_page/About_banner'
import Escape from '@/components/About_page/Escape'
import Our_values from '@/components/About_page/Our_values'
import Zest_for_life from '@/components/About_page/Zest_for_life'
import Layout from '@/layout'
import { getHeaderData } from '.'

import React from 'react'
import { HeaderType } from '@/components/Header'

const About_page = ({ data }: { data: HeaderType[] }) => {
    return (
        <div>
            <Layout data={data}>
                <About_banner />
                <About_team />
                <Our_values />
                <Zest_for_life />
                <Escape />
            </Layout>
        </div>
    )
}

export default About_page



export async function getStaticProps() {
    const data = await getHeaderData();
    return {
      props: {
        data
      }
    };
  }
  