import React from 'react'
import grow from '../../../assets/images/grow.png'
import classes from './Boxes.module.css'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

interface BoxesProps {
    title: string;
    desc: string;
    btn_title: string;
    shadow_right: boolean;
}
const Boxes: React.FC<BoxesProps> = (props) => {

    return (
        <>


            <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-compo1 ` : `shadow-compo`} max-w-[1345px] w-full mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
                <div className="max-w-[846px] ">

                    <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{props.title}</h2>
                    <p className={`${classes.growth_engine_desc} text-3xl my-5 md:pe-[80px]`}>{props.desc}</p>
                    <div className="">
                        <button className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5  flex gap-2 items-center'>{props.btn_title} <span className='p-1 bg-white rounded-full text-black me-1 md:me-2 text-lg'><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Boxes