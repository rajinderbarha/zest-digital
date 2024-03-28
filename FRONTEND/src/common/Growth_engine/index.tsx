import React from 'react'
// import arrow from '../../assets/images/component-3.svg'
import grow from '../../assets/images/Growth_v2.png'
import classes from './growthEngine.module.css'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

interface GrowthEngineProps {
    title: string;
    desc: string;
}
const Growth_engine: React.FC<GrowthEngineProps> = (props) => {

    return (
        <>
            {/* <img src={arrow} alt="" className='bg-red-200 border p-5' /> */}

            <div className={`${classes.growth_engine} max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px shadow-compo border border-black  bg-white text-color-1`}>
                <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{props.title}</h2>
                <p className={`${classes.growth_engine_desc} text-3xl my-5 `}>{props.desc}</p>
                <div className="">
                    <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>All inclusive growth marketing <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                </div>
            </div>
        </>
    )
}

export default Growth_engine