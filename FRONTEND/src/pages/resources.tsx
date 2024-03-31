import LearnToGrow from '@/components/resourcesPage/learnToGrow'
import Resourcesbanner from '@/components/resourcesPage/resourcesbanner/resourcesbanner'
import Layout from '@/layout'
import React from 'react'
// import LearnToGrow from '../components/resourcesPage/learnToGrow'
function resources() {
    return (
        <>
            <Layout>
                <Resourcesbanner />
                <LearnToGrow />
            </Layout>
        </>
    )
}

export default resources