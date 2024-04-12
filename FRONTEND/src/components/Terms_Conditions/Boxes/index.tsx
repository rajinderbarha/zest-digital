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
        <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-compo1 ` : `shadow-compo`} w-full mx-auto ps-14 pe-7 py-[70px] rounded-[20px] md:rounded-30px border border-black  bg-white text-color-1`}>
            <div className="max-w-[446px] ">
                <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{title || ''}</h2>
                <p className={`${classes.growth_engine_desc} text-3xl my-5 lg:pe-[80px] lg:mb-[45px]`}>{smallDescription || ''}</p>
                <div className="">
                    <Link href={`/terms-and-conditions/${buttonLink}`} className='bg-color-1 rounded-full text-white text-base md:py-[7px] md:ps-5 py-[3px] ps-[13px] pe-[5px] md:pe-0 w-fit  flex gap-2 items-center'>{buttonName || ''} <span className='md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-2 text-lg'><GoArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
