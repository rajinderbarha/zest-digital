import React from 'react'
import GrowthEnginePage_Banner from '../GrowthEnginePage/GrowthEnginePage_Banner'
import GrowthEnginePage_Box from '../GrowthEnginePage/GrowthEnginePage_Box'
import Growths from '../GrowthEnginePage/Growths'
import Global_Accordion from '../../common/Global_Accordion'
import flag_img from '../../assets/images/flags.png'
import Sign_up from './Sign_up'
import { GrowthTrackerType } from '../../../lib/interface'
function GrowthTracker({ data }: { data: GrowthTrackerType[] }) {

 
    
    return (
        <>
            <GrowthEnginePage_Banner data={data}/>
            <GrowthEnginePage_Box data={data} />
            {/* <GrowthEnginePage_Box page_name="GrowthTracker"
                has_buttons={false} btn_value="" img_url={flag_img}
                box_title_top='“If you have reached a plateau, Zest will help you to break through it. Highly recommended.”' box_desc_top="Milan Krizalkovic, Head of Tech at Great British Chefs"
                box_title_down='“Since working with Zest to increase traffic to our website and improve our conversion rate, we’ve seen incredibly strong progress towards our goals.”' box_desc_down="Steve Morton, Marketing Manager for Hanson UK"
                title1="Track your ROI" desc1="Our simple software enables businesses to measure performance of growth experiments towards their goals, from one easy to use platform." has_note={false} note1=""
                title2="Reporting made easy" desc2="Report on business-critical KPIs to justify marketing spend, including a journal that records the journey and outcomes of your growth experiments."
                title3="Smarter growth" desc3="Set clear revenue goals and growth experiments. Growth Tracker will even remind you to make progress updates. Beautifully simple. Just as goal tracking should be."
            /> */}
            <Sign_up data={data} />
            <Global_Accordion />
            {/* <Growths data={data}  /> */}
        
        </>
    )
}

export default GrowthTracker