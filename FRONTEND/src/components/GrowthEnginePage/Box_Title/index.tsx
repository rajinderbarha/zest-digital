

import React from 'react';
import { GrowthTrackerType } from '../../../../lib/interface';

interface BoxTitleProps {
    data: GrowthTrackerType[];
    section: 'upper' | 'below'; // Prop to indicate which section to display
}

const Box_Title: React.FC<BoxTitleProps> = ({ data, section }) => {
    return (
        <>
            {data?.map(({ growthTracker :{growthSection} }, index) => (
                <div className="mx-auto max-w-[1027px]" key={`${index}_Box_Title`}>
                    {section === 'upper' && (
                        <>
                            <h2 className='font-mono font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center sm:px-10 pb-6'>{growthSection.headingUpper}</h2>
                            <div className="px-16">
                                <p className='text-base font-mono text-color-9 mx-auto border-t border-color-9 text-center pt-3'>{growthSection.titleUpper}</p>
                            </div>
                        </>
                    )}
                    {section === 'below' && (
                        <>
                            <h2 className='font-mono font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center sm:px-10 pb-6'>{growthSection.headingBelow}</h2>
                            <div className="px-16">
                                <p className='text-base font-mono text-color-9 mx-auto border-t border-color-9 text-center pt-3'>{growthSection.titleBelow}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    );
}

export default Box_Title;
