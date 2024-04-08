import React from 'react'
import GrowthEnginePage_Banner from '../GrowthEnginePage/GrowthEnginePage_Banner'
import GrowthEnginePage_Box from '../GrowthEnginePage/GrowthEnginePage_Box'
import Growth_Accordion from '../../common/Growth_Accordion'
import Growths from '../GrowthEnginePage/Growths'
import person_Img from '../../assets/images/People_icon.png'

function GrowthMapper() {
    return (
        <>
            <GrowthEnginePage_Banner title="Growth Mapper" desc="Build a personalised roadmap towards predictable test-based growth" />
            <GrowthEnginePage_Box page_name="GrowthMapper"
                has_buttons={false} btn_value="" img_url={person_Img}
                box_title_top='“Growth Mapper has saved us countless hours, and has provided the structure and confidence that we needed to launch. It’s totally transformed our mindset.”' box_desc_top="Gabriella Russell-Flint, Co-Founder at The Zero Carbonist"
                box_title_down='“Growth Mapper helped us to think more deeply about the needs, wants, and conversion paths of our target customers. The tools learned will last a lifetime.”' box_desc_down="Michael Murdoch, Founder at The House London"
                title1="Learn your way" desc1="Available as both an expertly-guided workshop or online course, Growth Mapper equips you with the skills and tools required to create game-changing results." has_note={false} note1=""
                title2="Your growth roadmap" desc2="Create a growth-minded marketing plan. Growth Mapper harnesses your natural instincts, then provides you with the focus you need to turn what you know about your business into what you need to do to grow."
                title3="Life-long skills" desc3="Growth Mapper teaches you the skills to create a lasting impact, through the planning and creation of your own growth experiments."
            />
            <Growth_Accordion />
            {/* <Growths /> */}
            
        </>
    )
}

export default GrowthMapper