import React from 'react'
import Services_Banner from '@/common/OurServices/Services_Banner'
import Services_Box from '@/common/OurServices/Services_Box'
import Services_book_call from '@/common/OurServices/Services_book_call'
import Services_SubServices from '@/common/OurServices/Services_SubServices'
import Client_Result from '@/common/OurServices/Client_Result'
import Services_Quotes from '@/common/OurServices/Services_Quotes'
import Growth_Accordion from '../../common/Growth_Accordion'
import Services_Address from '@/common/OurServices/Services_Address'
import Services_details_proven_growth from '@/common/OurServices/Services_details/Services_details_proven_growth'
import Services_details_increase_market from '@/common/OurServices/Services_details/Services_details_increase_market'
import Services_details_happy_customer from '@/common/OurServices/Services_details/Services_details_happy_customer'

function SocialMediaServices() {
  return (
    <>
      <Services_Banner max_width="1093px" title="Social Media Services" desc="Harness the power of social media to turn online browsers, into enquiries and customers. Learn how a kick-ass social media strategy could help your business generate more leads, and sales online by speaking to our experts today." />
      <Services_Box image_1_title="Paid Ads" image_2_title="Re-marketing" image_3_title="B2B Outreach" title="Oxford’s Leading Social Media Agency that  " title_change_color="delivers outstanding results" desc_1="Take control of your marketing results by ensuring your message is in front of your target audience by using social media ads. Target your ideal customer profile using advanced targeting options, and techniques to convert users when they’re spending time online." desc_2="Does your business need to get in front of more of your target audience?" />
      {/* <GrowthMarketingServices_details /> */}
      <Services_details_happy_customer title1="Join" title_changeColor="350+" title2="Happy Customers" desc1="For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets." desc2="We’re incredibly proud to boast our client retention rate currently sits at 95%." />
      <Services_details_proven_growth title1="Grow "
        title2=""
        title_changeColor="Inbound Leads"
        desc1="In today’s world, in almost every industry, there are customers spending time online. Social media has seen some of the strongest online growth, with users, and time online growing yearly. Use social media ads to target users that are potential customers for your business, with a message that ignites action. "
        desc2="Start growing your inbound leads with paid social." />
      <Services_details_increase_market title1="Grow"
        title2=""
        title_changeColor="your ROI"
        desc1="Far too often we speak to business owners, and marketeers, who aren’t happy with the direction their marketing is going in, and don’t have a clear understanding of the return being generated. By following our proven frameworks, our expert team can deliver predictable revenue growth for your business."
        desc2="Don’t let it be your competitors making the gains." />
      <Services_book_call title='Need an overhaul of your social media strategy? ' />
      <Services_SubServices
        box_title="Our Social Media Services"
        image_1_title="Strategy"
        image_2_title="Paid Ads"
        image_3_title="Re-marketing"
        image_4_title="Landing Pages"
        image_5_title="B2B Lead Gen"
        image_6_title="A/B Testing"
        image_1_desc="Our expert team will work with you to craft the optimal strategy for your business to achieve it’s growth targets with paid social"
        image_2_desc="Increase your online visibility by ensuring your message gets across to your potential customers, even when they don’t know you yet"
        image_3_desc="Re-engage your website visitors after they’ve left your site. Stay front of mind, and give them a reason to convert"
        image_4_desc="Our SMM and copywriting experts can craft high-performing landing pages for your campaigns, built to convert"
        image_5_desc="Our LinkedIn Lead Generation experts can identify, target, and convert your ideal customers with the power of LinkedIn"
        image_6_desc="Take advantage of paid social’s advanced targeting options to quickly gather data, and run effective A/B tests"
      />
      <Client_Result
        card_1_percentage="-71%"
        card_1_title=" CPA reduction"
        card_1_desc_1="Improve International"
        card_1_desc_2="Reducing CPA for Veterinary Experts"
        card_2_percentage="+57%"
        card_2_title=" in enquiries"
        card_2_desc_1="Friary Meadow"
        card_2_desc_2="Boosting conversions for retirement village"
        card_3_percentage="+145%"
        card_3_title="in ticket sales"
        card_3_desc_1="National Trust"
        card_3_desc_2="Growing ticket sales for historic venues" />
      <Growth_Accordion />
      <Services_Quotes />
      <Services_Address title="Social Media Agency" />
    </>
  )
}

export default SocialMediaServices