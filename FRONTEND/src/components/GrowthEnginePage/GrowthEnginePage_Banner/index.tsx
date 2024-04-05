import React from 'react'
import classes from './GrowthEnginePage_Banner.module.css'
import { GrowthTrackerType } from '../../../../lib/interface';
import Link from 'next/link';



const GrowthEnginePage_Banner= ({ data }: { data: GrowthTrackerType[] }) => {
    return (
        <>
            <div className={`${classes.Singalcasebanner}`}>
                <div className='main_container'>
                    <div className="grid  max-w-[992px]">

                    {data.map(({ growthTracker: { heroSection } }, index) => (
                            <div key={`${index}_GrowthEnginePage_Banner`} className="" >
                                <h2 className='md:text-45px text-30px font-semibold font-mono bg-color-7 w-max px-2 mb-9'>{heroSection.upperTitle}</h2>
                                <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>{heroSection.heading}</h1>
                                <Link href={heroSection.button.buttonLink} className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">{heroSection.button.buttonName}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthEnginePage_Banner