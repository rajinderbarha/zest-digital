import React from 'react'
import Solution_Banner_Image from '../../../assets/images/Zest_solutions_circle.png'
import Image from 'next/image'
import classes from './Solution_Banner.module.css'

function Solution_Banner() {
    return (
        <>
            <div className={`${classes.Solution_Banner}`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-7">
                            <h2 className='md:text-45px text-25px font-semibold font-mono bg-color-7 banner_title w-max px-2 md:mb-9' >Full-stack growth marketing</h2>
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>Grow revenues faster and more predictably, with guaranteed results in 90-days</h1>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        <div className="md:col-span-5 ">
                            <Image className='md:ms-auto ' src={Solution_Banner_Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution_Banner