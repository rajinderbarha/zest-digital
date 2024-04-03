import React from 'react'
import GrowthEnginePage_Banner from '../GrowthEnginePage/GrowthEnginePage_Banner'
import GrowthMarketingServices_Box from '../GrowthMarketingServices/GrowthMarketingServices_Box'
import GrowthMarketingServices_details_happy_customer from '../GrowthMarketingServices/GrowthMarketingServices_details/GrowthMarketingServices_details_happy_customer'
import GrowthMarketingServices_details_proven_growth from '../GrowthMarketingServices/GrowthMarketingServices_details/GrowthMarketingServices_details_proven_growth'
import GrowthMarketingServices_details_increase_market from '../GrowthMarketingServices/GrowthMarketingServices_details/GrowthMarketingServices_details_increase_market'
import GrowthMarketingServices_book_call from '../GrowthMarketingServices/GrowthMarketingServices_book_call'
import GrowthMarketingServices_services from '../GrowthMarketingServices/GrowthMarketingServices_services'
import Client_Result from '../GrowthMarketingServices/Client_Result'
import Growth_Accordion from '../GrowthEnginePage/Growth_Accordion'
import GrowthMarketingServices_Quotes from '../GrowthMarketingServices/GrowthMarketingServices_Quotes'
import GrowthMarketingServices_Address from '../GrowthMarketingServices/GrowthMarketingServices_Address'

function SocialMediaServices() {
  return (
    <>
      <GrowthEnginePage_Banner title="SEO Services" desc="Rank in the top positions for the keywords your customers are searching for when they’re ready to buy. Learn how SEO can generate more enquiries, and sales from your website by speaking to our experts today.." />
      <GrowthMarketingServices_Box image_1_title="Content Marketing" image_2_title="Technical SEO" image_3_title="Link-building" title="Oxford’s Leading SEO Agency that " title_change_color="delivers remarkable results" desc_1="SEO is constantly evolving, and over the last decade we’ve stayed ahead of the curve by developing the most cutting edge strategies to allow our clients to generate stronger ROI from search marketing. Our clients see consistent increases in their organic enquiries, and sales as a result." desc_2="Do you need to generate more SEO leads for your business?" />
      {/* <GrowthMarketingServices_details /> */}
      <GrowthMarketingServices_details_happy_customer title1="Join" title_changeColor="350+" title2="Happy Customers" desc1="For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets." desc2="We’re incredibly proud to boast our client retention rate currently sits at 95%." />
      <GrowthMarketingServices_details_proven_growth title1="Generate"
        title2=""
        title_changeColor="Higher ROI "
        desc1="Far too often we speak to business owners, and marketeers, who arent happy with the direction their marketing is going in, and don’t have a clear understanding of the return being generated. By following our proven frameworks, our expert team break down your growth goals into specific KPI’s that need to be achieved. "
        desc2="A simple, data-driven strategy, and reporting process is what your business needs to increase ROI." />
      <GrowthMarketingServices_details_increase_market title1="Increase"
        title2=""
        title_changeColor="Market Share"
        desc1="In todays world, in almost every industry, there are customers searching online looking to make enquiries, and purchases. The businesses that rank best for the keywords being searched to generate those sales, are in the best position to gain the market share available online. "
        desc2="Don’t let it be your competitors making the gains." />
      <GrowthMarketingServices_book_call title='Need to overhaul your SEO strategy?' />
      <GrowthMarketingServices_services
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
      <Client_Result />
      <Growth_Accordion />
      <GrowthMarketingServices_Quotes />
      <GrowthMarketingServices_Address />
    </>
  )
}

export default SocialMediaServices