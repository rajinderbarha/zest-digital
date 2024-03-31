import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'
import Brain_icon from '../../../assets/images/Brain_icon.png'

function Our_values() {
    return (
        <div className={`${classes.Our_values}`}>
            <div className='main_container'>
                <div className={`${classes.values_bg}`}>
                    <div className='main_container_x  px-5'>
                        <h2 className='md:text-55px text-35px font-mono text-center md:mb-20 mb-8 font-semibold text-white'>Our values</h2>
                        <div className='Our_values_boxs '>
                            <div className='Our_values_main'>
                                <Image className=' md:max-w-[300px] max-w-[200px]' src={Brain_icon} alt="" />
                                <h3 className='font-semibold md:text-45px mb-5 font-mono text-30px text-color-7 border-b border-color-7 md:w-max'>Outcomes over outputs</h3>
                                <p className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}>Strive for transformational results. Question things. Challenge others and expect to be challenged. Be accountable – own your work.</p>
                            </div>

                            <div className={`${classes.Our_values_main_2}  text-end `}>
                                <Image className=' md:max-w-[300px] ms-auto max-w-[200px]' src={Brain_icon} alt="" />
                                <h3 className='font-semibold md:text-45px mb-5 ms-auto font-mono text-30px text-color-7 border-b border-color-7 md:w-max'>Hungry and humble</h3>
                                <p className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono md:text-30px text:25px`}>Commit to becoming a lifelong learner, and leave your ego at the door. Seek new perspectives. Learning leads to more solutions than problems.</p>
                            </div>

                            <div className='Our_values_main'>
                                <Image className=' md:max-w-[300px] max-w-[200px]' src={Brain_icon} alt="" />
                                <h3 className='font-semibold md:text-45px mb-5 font-mono text-30px text-color-7 border-b border-color-7 md:w-max'>Show up</h3>
                                <p className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}>Support colleagues and clients. Show up daily and contribute. Be productive not busy – just because you’re sweating, it doesn’t mean it’s working.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_values