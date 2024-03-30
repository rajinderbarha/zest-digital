import SingleIntro from '@/components/singleCaseStudyPage/SingleIntro/indedx'
import Singalcasebanner from '@/components/singleCaseStudyPage/singalcasebanner'
import Layout from '@/layout'
import React from 'react'

function singlecasestudy() {
  return (
    <>
      <Layout>
        <Singalcasebanner />
        <SingleIntro />
      </Layout>
    </>
  )
}

export default singlecasestudy