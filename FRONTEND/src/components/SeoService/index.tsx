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

function SeoService({ data }: { data: SingleOurService; }) {

  // console.log("data------------------------", data)

  const { title, smallDescription, button: { callButtonName, resultsButtonName }, Services_Box: { contentBox: { heading, description, belowdesc, coloredText }, }, clientResults: { title_CR, heading_CR, belowbuttonName_CR ,card}, agencyAddress:{buttonName_add,heading_add,slotDescription_add,address}  } = data
     const { Services_book_call: { heading_call, buttonName } } = data
     const { ourSubServices: { heading_sub, } } = data
     
     const imageBox = data.Services_Box.imageBox.map((item, index) => (
       { image: item.image, imagetitle: item.imagetitle }
  ));
  
  const button = {
    callButtonName, resultsButtonName
  }

  const serviceBox = {
    contentBox: {
      heading, description, belowdesc, coloredText
    }
  }
  
  const clientResultsMapData = card.map(({mapped_title,description_1_CR,description_2_CR,percentage_CR,buttonName_CR},index)=>(
    {
      mapped_title: mapped_title,
      description_1_CR: description_1_CR,
      description_2_CR:description_2_CR,
      percentage_CR:percentage_CR,
      buttonName_CR :buttonName_CR
    }
  ))
  // const clientResults = {       
  //   clientResults: {
  //     title_CR:title_CR, heading_CR:heading_CR, belowbuttonName_CR:belowbuttonName_CR,card:clientResultsMapData
  //   }
  // }
  
  
  const serviceDetails = data.Services_details.map((item, index) => (
    {
      heading: item.heading,
      description_1: item.description_1,
      description_2: item.description_2,
      image: item.image
    }
  ))
  const subServices = data.ourSubServices.services.map(({ image, title_sub, desc_sub }, index) => (
    {
      image,
      title_sub,
      desc_sub
    }
  ))

  const serviceQuotes = data.Services_Quotes.map(({desc_quote,name_quote}, index) => (
    {
      desc_quote: desc_quote,
      name_quote:  name_quote
    }
));


const agencyAddress  =  address.map(({dayandtiming_add,hourstitle_add,streetAddress_add,title_add},index)=>(
        {
          dayandtiming_add,
          hourstitle_add,
          streetAddress_add,
          title_add
        }
))


  return (
    <>
      <Services_Banner max_width="1033px" title={title} smallDescription={smallDescription} button={button} />
      {/* <Services_Box Services_Box={serviceBox} imageBox={imageBox} /> */}

      <Services_details_happy_customer Services_details={serviceDetails} />

      <Services_book_call heading={heading_call} buttonName={buttonName} />

      <Services_SubServices
        heading_sub={heading_sub} services={subServices}

      />
     <Client_Result card={clientResultsMapData} belowbuttonName_CR={belowbuttonName_CR} title_CR={title_CR} heading_CR={heading_CR} />

      {/* <Global_Accordion /> */}
      <Services_Quotes Services_Quotes={serviceQuotes}/>
      <Services_Address heading_add={heading_add} slotDescription_add={slotDescription_add} buttonName_add={buttonName_add} address={agencyAddress} card={[]}/>           {/**here cardData is related to the google map */}
    </>
  )
}

export default SeoService