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
import GrowthMarketingServices_Banner from '../GrowthMarketingServices/GrowthMarketingServices_Banner'

function Webservices() {
  return (
    <>
      <GrowthMarketingServices_Banner max_width="1068px" title="Web Services" desc="Transform your website into an online sales engine. Learn how a new, or refreshed website could help your business generate more enquiries, and sales by speaking to our experts today." />
      <GrowthMarketingServices_Box image_1_title="Design" image_2_title="Development" image_3_title="Hosting & Support" title="Oxford’s Leading Web Design Agency " title_change_color="building online sales engines" desc_1="We believe in creating incredible online experiences that produce outstanding results. A website should be so much more than an online brochure, or contact page. Our experts have decades of experience crafting beautiful websites that act as a sales engine for our clients, enabling all marketing activity to excel." desc_2="Does your website need a new lease of life?" />
      {/* <GrowthMarketingServices_details /> */}

      <GrowthMarketingServices_details_happy_customer title1="Join" title_changeColor="350+" title2="Happy Customers" desc1="For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets." desc2="We’re incredibly proud to boast our client retention rate currently sits at 95%." />

      <GrowthMarketingServices_details_proven_growth title1="Gain useful insights from"
        title2=""
        title_changeColor="tracking & analytics "
        desc1="Far too often we speak to business owners, and marketeers, who don’t have a clear understanding of the results being generated from their website. Our data specialists will aid you in setting up tracking for your website, and marketing channels to give you greater visibility over your performance, and allow you to re-invest in the areas generating the highest returns."
        desc2="" />

      <GrowthMarketingServices_details_increase_market title1="Ongoing"
        title2=""
        title_changeColor="Hosting & Support"
        desc1="Our leading Hosting & Support packages give clients peace of mind over their ongoing website health. Our expert team can manage, update, and implement fixes for your site following industry best practices, and our industry leading SLAs."
        desc2="" />

      <GrowthMarketingServices_book_call title='Need to refresh your online presence?' />
      <GrowthMarketingServices_services
        box_title="Our Web Services"
        image_1_title="Design"
        image_2_title="Development"
        image_3_title="Content"
        image_4_title="SEO"
        image_5_title="Analytics"
        image_6_title="Hosting"
        image_1_desc="Our expert team will work with you to create cutting edge designs and concepts to enhance your online look and feel"
        image_2_desc="Our in-house web development team have decades of experience building beautifully slick, and user friendly websites"
        image_3_desc="Improve your content, and messaging online to resonate with your target audience, and improve the performance of your marketing"
        image_4_desc="Ensure your website isn’t a dormant shop window. To generate a ROI, you need to ensure your site is optimised for search engines"
        image_5_desc="Get accurate, valuable data from your website, set up by experts, to allow you to make informed decisions on your marketing"
        image_6_desc="Utilise industry leading hosting services to ensure your website stays online, and performing optimally all of the time, or risk losing potential customers"
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
        card_3_title=" in ticket sales"
        card_3_desc_1="National Trust"
        card_3_desc_2="Growing ticket sales for historic venues" />
      <Growth_Accordion />
      <GrowthMarketingServices_Quotes />
      <GrowthMarketingServices_Address title='Web Design Agency' />
    </>
  )
}

export default Webservices