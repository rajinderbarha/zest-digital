

import GrowthTracker from '@/components/GrowthTracker'
import React from 'react'
import {getSharedTrackerData } from '../../lib/sanity.query';
import { AboutType, GrowthTrackerType } from '../../lib/interface';

function Growthtracker({ sharedTrackerData }: { sharedTrackerData: GrowthTrackerType[] }) {

    // console.log("========================================:",);

    // // Accessing properties of growthTrackerData
    // sharedTrackerData.forEach((data, index) => {
    //     console.log(`Growth Tracker Data ${index + 1}:`);
    //     console.log("Hero Section:", data.growthTracker.heroSection);
    //     console.log("Growth Section:", data.growthTracker.growthSection);
    //     console.log("Solution:", data.growthTracker.solution);
    //     console.log("Banner:", data.growthTracker.banner);
    //     console.log("Signup Form:", data.signupform);
    // });

    return (
        <>
            <GrowthTracker data={sharedTrackerData}/>
        </>
    )
}

export default Growthtracker

export async function getStaticProps() {
    const sharedTrackerData = await getSharedTrackerData();
    return {
        props: {
            sharedTrackerData
        }
    };
}
