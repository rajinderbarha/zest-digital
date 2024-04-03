import Casestudyintro from '@/components/caseStudy/CaseStudyIntro'
import Gross_profit from '@/components/caseStudy/gross_profit'
import Conversions from '@/components/caseStudy/instrumental/conversions'
import Instrumental from '@/components/caseStudy/instrumental/instrumental_main'
import Interests from '@/components/caseStudy/instrumental/interests'
import Partnership from '@/components/caseStudy/instrumental/partnership'
import Timeline from '@/components/caseStudy/instrumental/timeline'
import Visibility from '@/components/caseStudy/instrumental/visibility'
import React from 'react'

function Casestudy() {
  return (
    <div>
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
    </div>
  )
}

export default Casestudy
