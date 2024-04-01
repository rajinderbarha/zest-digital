import React from 'react'
import classes from './GrowthEnginePage_Banner.module.css'


interface GrowthEnginePage_Banner_Props {
    title: string;
    desc: string;
}
const GrowthEnginePage_Banner: React.FC<GrowthEnginePage_Banner_Props> = (props) => {
    return (
        <>
            <div className={`${classes.Singalcasebanner}`}>
                <div className='main_container'>
                    <div className="grid  max-w-[992px]">
                        <div className="">
                            <h2 className='md:text-45px text-30px font-semibold font-mono bg-color-7 w-max px-2 mb-9'>{props.title}</h2>
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>{props.desc}</h1>
                            <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthEnginePage_Banner