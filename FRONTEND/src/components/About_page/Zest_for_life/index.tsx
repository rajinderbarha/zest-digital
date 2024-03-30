import React from 'react'
import Zest_for_img from '../../../assets/images/earth.png'
import Image from 'next/image'
import classes from '../About_banner.module.css'

import People from '../../../assets/images/People.png'
function Zest_for_life() {
    return (
        <>
            <div className={`${classes.Zest_for_life}`}>
                <div className='main_container_x'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-9">
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5'>Zest For Life</h1>
                            <p className='font-mono font-semibold md:text-35px text-25px'>Alongside our commercial ambitions, we are driven by our three Ps, and doing more good in the world.</p>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        <div className="md:col-span-3">
                            <Image className=' md:ms-auto mx-auto' src={Zest_for_img} alt="" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-14 mt-16">
                        <div className='Zest_for_life_box text-center'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>People</h2>
                            <Image src={People} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Committed to supporting our people – those who work for and alongside us.</p>
                        </div>

                        <div className='Zest_for_life_box md:mt-20 text-center'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Planet</h2>
                            <Image src={People} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Determined to leave our planet having given back more than we took.</p>
                        </div>

                        <div className='Zest_for_life_box text-center md:mt-40'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Philanthropy</h2>
                            <Image src={People} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Proud to support causes that improve the lives of those less fortunate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Zest_for_life