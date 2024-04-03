import Climate_action from '@/common/Climate_action'
import Career from '@/components/Career'
import Layout from '@/layout'
import React from 'react'

function career() {
    return (
        <>
            <Layout>
                <Career />
                <Climate_action />
            </Layout>
        </>
    )
}

export default career