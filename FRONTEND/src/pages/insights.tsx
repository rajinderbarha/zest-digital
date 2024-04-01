// import BlogPage from '@/components/Blog'
import Climate_action from '@/common/Climate_action'
import Filters from '@/components/Insights/Filters'
import Layout from '@/layout'
import React from 'react'

const filters = () => {
    return (
        <div>
            <Layout>
                <Filters />
                <Climate_action />
            </Layout>

        </div>
    )
}

export default filters