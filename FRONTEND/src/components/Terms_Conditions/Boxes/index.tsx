import React from 'react';
import classes from './Boxes.module.css';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

interface BoxesProps {
    title: string;
    smallDescription: string;
    buttonName: string;
    buttonLink: string;
    shadow_right: boolean;
}

const Boxes: React.FC<BoxesProps> = (props) => {
    const { title, smallDescription, buttonName, buttonLink } = props; // Destructure props directly

    return (
        // <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right`} w-full mx-auto xl:ps-14 xl:pe-7 xl:py-[70px] lg:ps-12 lg:pe-5 lg:py-[50px] lg:rounded-30px md:rounded-[20px] rounded-[15px] border border-black  bg-white text-color-1`}>
        <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right`} w-full mx-auto lg:rounded-30px md:rounded-[20px] rounded-[15px] border border-black  bg-white text-color-1`}>
            <div className="max-w-[446px] ">
                <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{title || ''}</h2>
                <p className={`${classes.growth_engine_desc} text-3xl my-5 lg:pe-[80px] lg:mb-[45px]`}>{smallDescription || ''}</p>
                <div className="">
                    <Link href={`/terms-and-conditions/${buttonLink}`} 
                    // className='bg-color-1 rounded-full text-white text-base group hover:bg-white hover:text-color-1 border border-color-1 md:py-[5px] md:ps-4 py-[3px] ps-[13px] pe-[5px] md:pe-0 w-fit flex gap-2 items-center'>{buttonName || ''} <span className='md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-lg group-hover:text-white group-hover:bg-color-1'><GoArrowRight /></span></Link>
                    className={`${classes.terms_btn} bg-color-1 rounded-full text-white text-[16px] group hover:bg-white hover:text-color-1 border border-color-1  w-fit flex gap-[8px] items-center`}>{buttonName || ''} <span className=' bg-white rounded-full text-black  group-hover:text-white group-hover:bg-color-1'><GoArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
