import React from 'react'
import GrowthEnginePage_Banner from '../GrowthEnginePage/GrowthEnginePage_Banner'
import GrowthEnginePage_Box from '../GrowthEnginePage/GrowthEnginePage_Box'
import Global_Accordion from '../../common/Global_Accordion'
import Growths from '../GrowthEnginePage/Growths'
import Climate_action from '@/common/Climate_action'
import how_to_grow from '../../assets/images/how_to_grow.png'
import { GrowthCurveType, GrowthTrackerType } from '../../../lib/interface'

function GrowthCurve({ data }: { data: GrowthCurveType[] }) {

    return (
        <>
            <GrowthEnginePage_Banner title="Growth Curve" desc="On-demand, pay-as-you-go growth marketing support for total scalability" />
            <GrowthEnginePage_Box page_name="GrowthCurve"
                has_buttons={true} btn_value="Make an enquiry" img_url={how_to_grow}
                box_title_top='“Within 4 short months, Zest have reduced our CPA by an average of 30%, leading to an increase in leads by 43%. To handle all of this new business, we’re looking to recruit!”' box_desc_top="Martha Mwaisoloka, at A&E Fire and Security"
                box_title_down='“Growth Mapper helped us to think more deeply about the needs, wants, and conversion paths of our target customers. The tools learned will last a lifetime.”' box_desc_down="Michael Murdoch, Founder at The House London"
                title1="Instant scalability" desc1="Growth Curve offers a scalable growth marketing solution to compliment in-house capacity, seasonality, product launches, and the ebbs and flows of business." has_note={false} note1=""
                title2="Strategic support" desc2="Your Growth Manager provides powerful analysis and data-driven recommendations to grow your revenue, with real-time Slack access for Q&A."
                title3="Transparency + control" desc3="Regain control of your marketing budget. Our approval process is quick, simple, with 100% transparency on how your budget is spent."
            />
            <Global_Accordion heading_acc={''} card_acc={[]} belowbtnName_acc={''} belowbtnLink_acc={''} />
            {/* <Growths /> */}
            {/* <Climate_action /> */}
        </>
    )
}

export default GrowthCurve