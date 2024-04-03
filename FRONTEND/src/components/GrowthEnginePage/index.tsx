import React from 'react'
import GrowthEnginePage_Banner from './GrowthEnginePage_Banner'
import GrowthEnginePage_Box from './GrowthEnginePage_Box'
import Growth_Accordion from './Growth_Accordion'
import Growths from './Growths'
import flag_img from '../../assets/images/flags.png'

function GrowthEnginePage() {
    return (
        <>
            <GrowthEnginePage_Banner title="Growth Engine" desc="The fastest and most reliable solution to grow your revenue" />

            <GrowthEnginePage_Box page_name="GrowthEnginePage"
                has_buttons={true} btn_value="Make an enquiry" img_url={flag_img}
                box_title_top='“I cannot recommend the team at Zest highly enough. Our visibility on Google and elsewhere brings us new business every single day.”' box_desc_top="James Woollard, Managing Director of Polythene UK"
                box_title_down='“Since working with Zest to increase traffic to our website and improve our conversion rate, we’ve seen incredibly strong progress towards our goals.””' box_desc_down="Steve Morten, Marketing Manager for Hanson UK"
                title1="All-inclusive growth" desc1="Remove unexpected costs and quibbles, and achieve more, with all-inclusive growth marketing including SEO, PPC, and content, from £2,995 per month." has_note={true} note1="¹ Price shown is exclusive of tax"
                title2="Speed and certaintye" desc2="We’ll deliver a detailed growth map for your business within 14-days, and we guarantee a result within 90-days of onboarding. You can drop us if we don’t deliver"
                title3="Peace of mind" desc3="Save on wasted time, stressful recruitment, and expensive tooling. Growth Engine is your complete growth marketing team without the headaches."
            />

            <Growth_Accordion />
            <Growths />
        </>
    )
}

export default GrowthEnginePage