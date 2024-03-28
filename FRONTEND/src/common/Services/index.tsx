import React from 'react'
import classes from './Services.module.css'
import Image from 'next/image'
import image1 from '../../assets/images/Optimisation_icon.png'
import image2 from '../../assets/images/Code_icon.png'
import image3 from '../../assets/images/target_icon_v2.png'
// import image2 from '../../assets/images/'
// import image3 from '../../assets/images/image3.png'
const Services = () => {
    return (
        <>
            {/* <div className={`${classes.bg_image} mx-auto max-w-[1720px] w-full px-5 my-10 font-mono rounded-30px`}> */}
            <div className="mx-auto max-w-[1720px] w-full px-5 my-10 mt-36">
                <div className={`${classes.bg_image} bg-black rounded-30px font-mono pt-[88px]  flex`}>
                    <div className=" text-white p-10 pb-[218px] ">
                        <h2 className='text-5xl font-semibold mb-5'>Our Services</h2>
                        <div className="text-lg flex gap-5 flex-col">
                            <a href="" className="underline text-lg">SEO Services</a>
                            <a href="" className="underline text-lg">PPC Services</a>
                            <a href="" className="underline text-lg">PPC Services</a>
                            <a href="" className="underline text-lg">Web Services</a>
                            <a href="" className="underline text-lg">Growth Marketing</a>
                        </div>
                    </div>
                    <div className="flex  -mt-48">
                        {/* <div className=""> */}

                        <Image src={image1} alt="" className=' h-max self-end' />

                        <Image src={image2} alt="" className='  h-max self-center' />
                        <Image src={image3} alt="" className='  h-max ' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services