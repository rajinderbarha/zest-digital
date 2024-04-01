import Climate_action from '@/common/Climate_action'
import { HeaderType } from '@/components/Header'
import Casestudyintro from '@/components/caseStudy/CaseStudyIntro'
import Gross_profit from '@/components/caseStudy/gross_profit'
import Conversions from '@/components/caseStudy/instrumental/conversions'
import Instrumental from '@/components/caseStudy/instrumental/instrumental_main'
import Interests from '@/components/caseStudy/instrumental/interests'
import Partnership from '@/components/caseStudy/instrumental/partnership'
import Timeline from '@/components/caseStudy/instrumental/timeline'
import Visibility from '@/components/caseStudy/instrumental/visibility'
import Layout from '@/layout'
import React from 'react'
import { getHeaderData } from '.'

function Casestudy({ data }: { data: HeaderType[] }) {
    return (
        <div>
            <Layout data={data}>
                <Casestudyintro />
                <Gross_profit />
                <Instrumental />
                <Gross_profit />
                <Visibility />
                <Gross_profit />
                <Interests />
                <Gross_profit />
                <Partnership />
                <Gross_profit />
                <Conversions />
                <Gross_profit />
                <Timeline />
                <Climate_action />
            </Layout>
        </div>
    )
}

export default Casestudy


export async function getStaticProps() {
    const data = await getHeaderData();
    return {
      props: {
        data
      }
    };
  }
  