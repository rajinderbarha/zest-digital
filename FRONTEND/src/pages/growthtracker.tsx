

import GrowthTracker from '@/components/GrowthTracker'
import React from 'react'
import { getSharedTrackerData } from '../../lib/sanity.query';
import { AboutType, GrowthTrackerType } from '../../lib/interface';

function Growthtracker({ sharedTrackerData }: { sharedTrackerData: GrowthTrackerType[] }) {



    return (

        <GrowthTracker data={sharedTrackerData} />

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
