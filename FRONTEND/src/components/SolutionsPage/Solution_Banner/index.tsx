import React, { useEffect } from 'react'
import Image from 'next/image'
import classes from './Solution_Banner.module.css'
import { urlFor } from '../../../../lib/sanity.client'
import { Solution_BannerType } from '../../../../lib/interface'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Solution_Banner({ data }: { data: Solution_BannerType }) {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <>
            <div className={`${classes.Solution_Banner} main_padding`} data-aos="fade-up" >
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-7 min-tb:max-tb:col-span-12">
                            {/* <h2 className=' banner_title xl:text-45px lg:text-40px min-tb:max-tb:px-2 min-tb:max-tb:text-25px md:text-35px text-color-1 sm:text-[27px] text-[22px] font-semibold font-mono inline bg-light-green-1  w-fit md:w-max py-[4px]  ' >{data.upperTitle}</h2> */}
                            <h2 className={`${classes.banner_title} banner_title xl:text-45px lg:text-40px min-tb:max-tb:px-2 min-tb:max-tb:text-25px md:text-35px text-color-1 sm:text-[27px] text-[22px] font-semibold font-mono inline bg-light-green-1  w-fit md:w-max py-[4px]  `} >{data.upperTitle}</h2>
                            {/* <h1 className='font-mono min-tb:max-tb:text-30px min-tb:max-tb:max-w-[533px] font-semibold xl:text-55px lg:text-50px md:text-[42px] sm:text-[30px] text-[22px] mb-5 text-color-1 md:mt-9 min-tb:max-tb:mt-[20px] sm:mt-[21px] mt-[15px]'>{data.heading}</h1> */}
                            <h1 className={`${classes.banner_desc} font-mono min-tb:max-tb:text-30px min-tb:max-tb:max-w-[533px] font-semibold xl:text-55px lg:text-50px md:text-[42px] sm:text-[30px] text-[22px] mb-5 text-color-1 md:mt-9 min-tb:max-tb:mt-[20px] sm:mt-[21px] mt-[15px]`}>{data.heading}</h1>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        <div className={`${classes.image_div} md:col-span-5 min-tb:max-tb:col-span-12 md:flex`}  data-aos="fade" data-aos-delay="200">
                            <Image className={`${classes.banner_image} rotate sm:max-w-fit md:ms-auto min-tb:max-tb:p-0 lg:p-[55px] md:p-[44px]  `} src={urlFor(data.image).url()} alt="banner img" width={350} height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution_Banner