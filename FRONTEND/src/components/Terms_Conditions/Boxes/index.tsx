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
        <div className={`${classes.growth_engine} ${props.shadow_right ? ` shadow-compo1 ` : `shadow-compo`} max-w-[1345px] w-full mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}>
            <div className="max-w-[846px] ">
                <h2 className={`${classes.growth_engine_title} text-40px font-semibold `}>{title || ''}</h2>
                <p className={`${classes.growth_engine_desc} text-3xl my-5 md:pe-[80px]`}>{smallDescription || ''}</p>
                <div className="">
                    <Link href={`/terms-and-conditions/${buttonLink}`} className='bg-color-1 rounded-full text-white text-base py-[7px] ps-5  flex gap-2 items-center'>{buttonName || ''} <span className='p-1 bg-white rounded-full text-black me-1 md:me-2 text-lg'><GoArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
