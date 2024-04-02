import React from 'react'
import GrowthEnginePage_Banner from './GrowthMarketingServices_Banner'
import GrowthMarketingServices_Box from './GrowthMarketingServices_Box'
import GrowthMarketingServices_details from './GrowthMarketingServices_details'
import GrowthMarketingServices_book_call from './GrowthMarketingServices_book_call'
import GrowthMarketingServices_services from './GrowthMarketingServices_services'

function GrowthMarketingServices() {
    return (
        <>
            <GrowthEnginePage_Banner />
            <GrowthMarketingServices_Box />
            <GrowthMarketingServices_details />
            <GrowthMarketingServices_book_call />
            <GrowthMarketingServices_services />
        </>
    )
}

export default GrowthMarketingServices