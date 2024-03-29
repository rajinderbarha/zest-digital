import React from 'react'
import classes from '../instrumental.module.css'
import Timeline_img from '../../../../assets/images/Project_timeline_Zest.png'
import Image from 'next/image'
function Timeline() {
    return (
        <>
            <div className={`${classes.Instrumental}`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12  gap-20  items-center">

                        <div className="md:col-span-6 md:mt-0 mt-10 md:pe-10">
                            <h2 className='font-mono font-semibold md:text-45px text-25px mb-5 w-max-[909px] '>“Since day one, Zest has consistently pushed our marketing to the next level. We’re delighted with the results — we can’t wait to see what they do next!”</h2>
                            <p className='text-color-9 pt-2 border-t border-color-9'>Tom Payne, Managing Director at TP Knotweed Solutions</p>

                        </div>
                        <div className="md:col-span-6 ">
                            <Image className='md:ms-auto mx-auto' src={Timeline_img} alt="" />
                            <h3 className='font-mono font-semibold text-30px  w-max-[373px] text-center mx-auto mt-4'>Project timeline</h3>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline