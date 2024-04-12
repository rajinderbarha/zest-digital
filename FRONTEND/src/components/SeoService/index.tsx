import React from 'react'
import Services_Banner from '@/common/OurServices/Services_Banner'
import Services_Box from '@/common/OurServices/Services_Box'
import Services_book_call from '@/common/OurServices/Services_book_call'
import Services_SubServices from '@/common/OurServices/Services_SubServices'
import Client_Result from '@/common/OurServices/Client_Result'
import Services_Quotes from '@/common/OurServices/Services_Quotes'
import Global_Accordion from '../../common/Global_Accordion'
import Services_Address from '@/common/OurServices/Services_Address'
// import Services_details_proven_growth from '@/common/OurServices/Services_details/Services_details_proven_growth'
// import Services_details_increase_market from '@/common/OurServices/Services_details/Services_details_increase_market'
import Services_details_happy_customer from '@/common/OurServices/Services_details/Services_details_happy_customer'
import { SingleOurService } from '../../../lib/interface'

function SeoService({data}: { data: SingleOurService;}) {

  console.log("data------------------------",data)

  const {title, smallDescription , button:{callButtonName,resultsButtonName}, Services_Box:{contentBox:{heading,description,belowdesc,coloredText},}} = data
 
  const { Services_book_call:{heading_call,buttonName}} = data

  const imageBox  =  data.Services_Box.imageBox.map((item,index)=>(
     {image:item.image,imagetitle:item.imagetitle}
));

const button  = {
  callButtonName,resultsButtonName
}

const serviceBox = {
  contentBox:{
    heading,description,belowdesc, coloredText
  }
}

const serviceDetails = data.Services_details.map((item,index)=>(
    {
      heading:item.heading,
      description_1:item.description_1,
      description_2:item.description_2,
      image:item.image
    }
))


// const serviceBox = 


  return (
    <>
      <Services_Banner max_width="1033px" title={title} smallDescription={smallDescription} button={button} />
      <Services_Box Services_Box={serviceBox} imageBox={imageBox} />

      <Services_details_happy_customer  Services_details={serviceDetails}/>
      
      <Services_book_call  heading={heading_call} buttonName={buttonName} />

      <Services_SubServices
        box_title="Our SEO Services"
        image_1_title="Strategy"
        image_2_title="Content"
        image_3_title="Link-building"
        image_4_title="On-page SEO"
        image_5_title="Off-page SEO"
        image_6_title="Technical"
        image_1_desc="Our expert team will work with you to craft the optimal strategy for your business to achieve it’s growth targets using SEO"
        image_2_desc="Our strategists, and expert copywriters can transform your website copy into high ranking content, built to convert"
        image_3_desc="Improve your chances of ranking well by increasing your domain rating, online trust, and visibility by working with our link-building team"
        image_4_desc="Reviewing your website content, our SEO experts will make recommendtions to optimise your content for your target keywords"
        image_5_desc="Analysing the full range of SEO ranking factors, our expert team will make recommendations to improve your off-page content"
        image_6_desc="Our technical team can support the smooth-running of your website, and make recommendations to improve it’s technical health score"
      />
      <Client_Result
        card_1_percentage="+88%"
        card_1_title="domain authority"
        card_1_desc_1="Polythene UK"
        card_1_desc_2="Increasing DA for industry leader"
        card_2_percentage="+578%"
        card_2_title="more sessions"
        card_2_desc_1="TP Knotweed"
        card_2_desc_2="Boosting traffic for knotweed specialist"
        card_3_percentage="+130%"
        card_3_title="more keywords"
        card_3_desc_1="Hanson (UK)"
        card_3_desc_2="Best SEO Campaign finalist at the UK Digital Growth Awards"
      />
      {/* <Global_Accordion /> */}
      <Services_Quotes />
      <Services_Address title='SEO Agency' />
    </>
  )
}

export default SeoService