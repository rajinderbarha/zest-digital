import React from 'react'
import classes from './GrowthEnginePage_Box.module.css'
import { GoArrowRight } from "react-icons/go";
import Box_Title from '../Box_Title';
import Image from 'next/image';

interface GrowthEnginePage_Banner_Props {
    title1: string;
    desc1: string;
    has_note: boolean;
    note1: string;
    title2: string;
    desc2: string;
    title3: string;
    desc3: string;
    has_buttons: boolean;
    btn_value: string;
    img_url: object;
    box_title_top: string;
    box_desc_top: string;
    box_title_down: string;
    box_desc_down: string;
    page_name: string;
}
const GrowthEnginePage_Box: React.FC<GrowthEnginePage_Banner_Props> = (props) => {
    let imageClass: string = "";
    if (props.page_name === "GrowthEnginePage" || props.page_name === "GrowthTracker") {
        imageClass = "absolute right-0  md:max-w-[385px] w-full md:max-h-[385px] h-full max-w-[250px] lg:-bottom-[350px] md:-bottom-[250px]"
    }
    if (props.page_name === "GrowthMapper") {
        imageClass = "absolute right-0 md:max-w-max max-w-[350px]"
    }
    if (props.page_name === "GrowthCurve") {
        imageClass = "absolute right-0 md:max-w-[385px] w-full md:max-h-[385px] h-full  lg:-bottom-[440px] md:-bottom-[340px] -bottom-[270px] max-w-[250px] max-h-[250px]"
    }
    return (
        <>
            <div className={`${classes.Our_values} mt-[66px] mb-36`}>
                <div className='main_container '>
                    <div className={`${classes.values_bg}`}>
                        <div className='main_container_x  px-5 relative'>
                            <div className="mb-[172px]">

                                <Box_Title title={props.box_title_top} desc={props.box_desc_top} />
                            </div>
                            <div className='Our_values_boxs '>
                                <div className='Our_values_main  md:max-w-[830px] md:pe-16'>
                                    <h3 className='font-semibold md:text-40px mb-5 font-mono text-30px text-color-7  md:w-max'>{props.title1}</h3>
                                    <p className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}>{props.desc1}</p>
                                    {props.has_note && <p className='text-color-10 font-mono mt-4'>{props.note1}</p>}
                                    {props.has_buttons &&
                                        <button className='font-mono font-normal text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center mt-7'>{props.btn_value} <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>}
                                </div>

                                <div className={`${classes.Our_values_main_2} ms-auto text-end md:max-w-[830px] md:ps-16 my-11`}>
                                    <h3 className='font-semibold md:text-40px mb-5 ms-auto font-mono text-30px text-color-7  md:w-max'>{props.title2}</h3>
                                    <p className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono md:text-30px text:25px`}>{props.desc2}</p>
                                    {props.has_buttons &&
                                        <button className='font-mono font-normal ms-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center mt-7'>{props.btn_value} <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>}
                                </div>

                                <div className='Our_values_main md:max-w-[830px] md:pe-16 '>
                                    <h3 className='font-semibold md:text-40px mb-5 font-mono text-30px text-color-7 md:w-max'>{props.title3}</h3>
                                    <p className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}>{props.desc3}</p>
                                    {props.has_buttons &&
                                        <button className='font-mono font-normal   text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center mt-7'>{props.btn_value} <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>}
                                </div>
                            </div>
                            <div className="mt-[100px] md:mt-[185px] md:mb-[235px] mb-[140px] relative ">

                                <Box_Title title={props.box_title_down} desc={props.box_desc_down} />


                                <div className={imageClass}>
                                    <Image src={props.img_url} alt="" className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthEnginePage_Box