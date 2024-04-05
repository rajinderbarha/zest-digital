import React from 'react'
// import arrow from '../../assets/images/component-3.svg'
import grow from '../../assets/images/grow.png'
import classes from './growthEngine.module.css'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";
import { GrowthTrackerType } from '../../../lib/interface';

interface GrowthEngineProps {
    title: string;
    desc: string;
    btn_title: string;
    has_image: boolean;
    shadow_right: boolean;
}
const Growth_engine = ( data :  GrowthEngineProps ) => {

    return (
        <>

            {true ? (
                <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-compo1 ` : `shadow-compo`} grid sm:grid-cols-5 max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px  border border-black  bg-white text-color-1 relative`}>
                    <div className="col-span-3">

                        <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{props.title}</h2>
                        <p className={`${classes.growth_engine_desc} text-3xl my-5 `}>{props.desc}</p>
                        <div className="">
                            <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>{props.btn_title} <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                        </div>
                    </div>
                    <div className={`${classes.grow_image} absolute -bottom-40 right-0 sm:block hidden`}>
                        <Image src={grow} alt="" />
                    </div>
                </div>
            ) :
                <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-compo1 ` : `shadow-compo`} max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
                    <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{props.title}</h2>
                    <p className={`${classes.growth_engine_desc} text-3xl my-5 `}>{props.desc}</p>
                    <div className="">
                        <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center'>{props.btn_title} <span className='p-1 bg-white rounded-full text-black me-2 text-lg'><GoArrowRight /></span></button>
                    </div>
                </div>
            }
        </>
    )
}

export default Growth_engine