
import Climate_action from '@/common/Climate_action'
import About_team from '@/components/About_page/About_Team'
import About_banner from '@/components/About_page/About_banner'
import Escape from '@/components/About_page/Escape'
import Our_values from '@/components/About_page/Our_values'
import Zest_for_life from '@/components/About_page/Zest_for_life'
import Layout from '@/layout'

import React from 'react'

const About_page = () => {
    return (
        <div>
            <Layout>
                <About_banner />
                <About_team />
                <Our_values />
                <Zest_for_life />
                <Escape />
                <Climate_action />
            </Layout>
        </div>
    )
}

export default About_page