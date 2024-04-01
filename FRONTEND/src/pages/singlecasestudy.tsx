import SingleIntro from '@/components/singleCaseStudyPage/SingleIntro/indedx'
import Singalcasebanner from '@/components/singleCaseStudyPage/singalcasebanner'
import Layout from '@/layout'
import React from 'react'
import { getHeaderData } from '.'
import { HeaderType } from '@/components/Header'

function singlecasestudy({ data }: { data: HeaderType[] }) {
  return (
    <>
      <Layout data={data}>
        <Singalcasebanner />
        <SingleIntro />
      </Layout>
    </>
  )
}

export default singlecasestudy



export async function getStaticProps() {
  const data = await getHeaderData();
  return {
    props: {
      data
    }
  };
}
