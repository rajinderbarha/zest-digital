import React from 'react'
import classes from '../instrumental.module.css'
import Image from 'next/image'
import Partnership_line_3 from '../../../../assets/images/Partnership_line_3.png'
function Partnership() {
    return (
        <>
            <div className={`${classes.Instrumental}`}>
                <div className='main_container_x'>
                    <div className="">

                        <div className=" md:mt-0 mt-10">
                            <h2 className={`${classes.Interests_h2} font-mono font-semibold md:text-45px text-25px mb-5 w-max-[1262px]`}>“We’ve enjoyed our partnership and have been very impressed with the influx of leads. The team understands our needs and have tailored strategies to support our growth.”</h2>
                            <p className='text-color-9 pt-2 border-t border-color-9'>Ed Stallard, Managing Director at Fire & Security Store</p>

                        </div>
                        <div className={`${classes.Interests_img} ms-auto`}>
                            <Image className=' md:ms-auto mx-auto' src={Partnership_line_3} alt="" />
                            {/* <h3 className='font-mono font-semibold text-30px  w-max-[373px] text-center mx-auto mt-4'>Reduction in cost per conversion rate</h3> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partnership