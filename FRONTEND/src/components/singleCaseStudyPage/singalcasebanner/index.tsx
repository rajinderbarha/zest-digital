import React from 'react'
import classes from './Singalcasebanner.module.css'
import { SingalcasebannerProps } from '../../../../lib/interface'


function Singalcasebanner({ data }: SingalcasebannerProps) {
    const { title, upperTitle } = data
    return (
        <>
            <div className={`${classes.Singalcasebanner} main_padding `}>
                <div className='main_container'>
                    <div className="grid ">
                        <div className="xl:max-w-[971px] lg:max-w-[800px] md:max-w-[700px] max-w-[500px] pe-[10px]">
                            <h2 className='xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[22px] font-semibold font-mono bg-color-7 w-max px-2' >{upperTitle}</h2>
                            <h1 className='font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-30px text-[25px] lg:mt-[20px] md:mt-[15px] mt-[8px]'>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singalcasebanner