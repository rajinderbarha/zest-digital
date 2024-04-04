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

function Ppcservice() {
    return (
        <>
            <GrowthMarketingServices_Banner max_width="1068px" title="PPC Services" desc="Target your ideal customers at the moment they’re searching for your service or products with PPC Marketing. Find out how PPC can deliver a consistent flow of enquiries and sales for your business by speaking to our experts today." />
            <GrowthMarketingServices_Box image_1_title="Search Marketing" image_2_title="Display Advertising" image_3_title="Social Ads" title="Oxford’s Leading PPC Agency that  " title_change_color="delivers remarkable results" desc_1="Catapult your website to the top search positions with the power of PPC marketing. Our expert team have spent decades honing their skills for our clients. Our leading PPC strategies aim to deliver predictable revenue growth for your business, giving you the ability to scale at will." desc_2="Do you need to generate a higher ROI from your PPC marketing?" />
            {/* <GrowthMarketingServices_details /> */}
            <GrowthMarketingServices_details_happy_customer title1="Join" title_changeColor="350+" title2="Happy Customers" desc1="For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets." desc2="We’re incredibly proud to boast our client retention rate currently sits at 95%." />
            <GrowthMarketingServices_details_proven_growth title1=""
                title2="your Spend"
                title_changeColor="Control"
                desc1="Regain control of your marketing spend by fixing budgets upfront, or work with our expert team to calculate what your business needs to spend to hit your targets. Work with our growth team to determine where your budget is best spent, and what return can be expected as a result. Using our growth frameworks, we will break down your growth targets, and budgets to define clear KPIs."
                desc2="A simple, data-driven strategy gives you greater control over your budget, and business growth." />
            <GrowthMarketingServices_details_increase_market title1=""
                title2=" your ROI"
                title_changeColor="Grow"
                desc1="Far too often we speak to business owners, and marketeers, who aren’t happy with the direction their marketing is going in, and don’t have a clear understanding of the return being generated. By following our proven frameworks, our expert team can deliver predictable revenue growth for your business."
                desc2="" />
            <GrowthMarketingServices_book_call title='Need to re-launch your PPC strategy?' />
            <GrowthMarketingServices_services
                box_title="Our PPC Services"
                image_1_title="PPC Strategy"
                image_2_title="Paid Search"
                image_3_title="Display Ads"
                image_4_title="Remarkeketing"
                image_5_title="Social Ads"
                image_6_title="Landing Pages"
                image_1_desc="Our expert team will work with you to craft the optimal strategy for your business to achieve it’s growth targets using PPC"
                image_2_desc="Take the top search positions for the keywords your target audience are searching when they’re looking to buy"
                image_3_desc="Target your potential customers in the places they spend their time online, and capture their attention before your competitors do"
                image_4_desc="Re-engage your website visitors after they’ve visited your site. Give them a reason to convert"
                image_5_desc="Use Social ads to target users by interests, and increase visibility of your website and services to new audiences"
                image_6_desc="Our PPC and copywriting experts can craft high-performing landing pages for your campaigns, built to convert"
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
            <GrowthMarketingServices_Address title="PPC Agency" />
        </>
    )
}

export default Ppcservice