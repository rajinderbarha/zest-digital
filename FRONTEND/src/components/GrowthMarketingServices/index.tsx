import React from 'react'
import GrowthEnginePage_Banner from './GrowthMarketingServices_Banner'
import GrowthMarketingServices_Box from './GrowthMarketingServices_Box'
import GrowthMarketingServices_details from './GrowthMarketingServices_details'
import GrowthMarketingServices_book_call from './GrowthMarketingServices_book_call'
import GrowthMarketingServices_services from './GrowthMarketingServices_services'
import Client_Result from './Client_Result'
import GrowthMarketingServices_Quotes from './GrowthMarketingServices_Quotes'
import Growth_Accordion from '../GrowthEnginePage/Growth_Accordion'
import GrowthMarketingServices_Address from './GrowthMarketingServices_Address'
import GrowthMarketingServices_details_happy_customer from './GrowthMarketingServices_details/GrowthMarketingServices_details_happy_customer'
import GrowthMarketingServices_details_proven_growth from './GrowthMarketingServices_details/GrowthMarketingServices_details_proven_growth'
import GrowthMarketingServices_details_increase_market from './GrowthMarketingServices_details/GrowthMarketingServices_details_increase_market'

function GrowthMarketingServices() {
    return (
        <>
            <GrowthEnginePage_Banner title="Growth Marketing Services" desc="Stop wasting time and budget on unprofitable campaigns. Work with our growth specialists to uncover strengths, and weaknesses in your digital strategy. Learn how growth marketing can generate more enquiries, and sales from your website by speaking to our experts today." />
            <GrowthMarketingServices_Box image_1_title="PPC" image_2_title="SEO & Web" image_3_title="Social" title="Oxford’s Leading Growth Marketing Agency that" title_change_color="generates predictable revenue growth" desc_1="Having spent 10+ years developing growth marketing strategies for our clients, we know what it takes to get it right. We speak to hundreds of business owners who don’t know what they’re spending on marketing each month, but more worryingly, they have no idea what their marketing generates for them (or not), making them powerless to make change for the better." desc_2="Wouldn’t you prefer ROI be the focal point of all your marketing?" />
            {/* <GrowthMarketingServices_details /> */}
            <GrowthMarketingServices_details_happy_customer title1="Join" title_changeColor="350+" title2="Happy Customers" desc1="For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets." desc2="We’re incredibly proud to boast our client retention rate currently sits at 95%." />
            <GrowthMarketingServices_details_proven_growth title1=""
                title2="Growth Frameworks"
                title_changeColor="Proven "
                desc1="We believe that successful marketing is the cumulative progress achieved from running a series of tests to find the winning combination. A goal (such as revenue growth) must be converted into a defined objective, and larger objectives broken down into micro-goals; manageable key actions and results (KAR) measured against clear KPIs that take you closer towards success."
                desc2="Objective(s), Strategy, Key Actions & Results. Otherwise known as OSKAR." />
            <GrowthMarketingServices_details_increase_market title1=""
                title2="Market Share"
                title_changeColor="Increase"
                desc1="n todays world, in almost every industry, there are customers searching online looking to make enquiries, and purchases. The businesses that rank best for the keywords being searched to generate those sales, are in the best position to gain the market share available online."
                desc2="Don’t let it be your competitors making the gains." />
            <GrowthMarketingServices_book_call title='Need to overhaul your growth marketing strategy?' />
            <GrowthMarketingServices_services
                image_1_title="Strategy"
                image_2_title="SEO"
                image_3_title="PPC"
                image_4_title="Paid social "
                image_5_title="Web"
                image_6_title="Hosting"
                image_1_desc="Our expert team will work with you to craft the optimal strategy for your business to achieve it’s growth targets"
                image_2_desc="Commercially aware PPC campaigns to drive targeted traffic to content that converts"
                image_3_desc="Commercially aware PPC campaigns to drive targeted traffic to content that converts"
                image_4_desc="Advanced targeting, creatives, and tracking make paid social the ideal channel to boost digital ROI"
                image_5_desc="Transforming dull, poor performing websites into slick sales engines to support your growth"
                image_6_desc="Market leading hosting services to enable your website to run optimally, never missing an opportunity"
            />
            <Client_Result />
            <Growth_Accordion />
            <GrowthMarketingServices_Quotes />
            <GrowthMarketingServices_Address />
        </>
    )
}

export default GrowthMarketingServices