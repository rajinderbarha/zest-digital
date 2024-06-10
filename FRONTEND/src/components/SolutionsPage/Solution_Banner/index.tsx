import React from 'react'
import Image from 'next/image'
import classes from './Solution_Banner.module.css'
import { urlFor } from '../../../../lib/sanity.client'
import { Solution_BannerType } from '../../../../lib/interface'


function Solution_Banner({ data }: { data: Solution_BannerType }) {

    return (
        <>
            <div className={`${classes.Solution_Banner} main_padding`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-7">
                            <h2 className=' banner_title xl:text-45px lg:text-40px md:text-35px text-color-1 sm:text-[27px] text-[22px] font-semibold font-mono inline bg-light-green-1  w-fit md:w-max py-[4px]  ' >{data.upperTitle}</h2>
                            <h1 className='font-mono font-semibold xl:text-55px lg:text-50px md:text-[42px] sm:text-[30px] text-[22px] mb-5 text-color-1 md:mt-9 sm:mt-[21px] mt-[15px]'>{data.heading}</h1>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        <div className="md:col-span-5  md:flex">

                            <Image className={`${classes.banner_image} sm:max-w-fit md:ms-auto lg:p-[55px] md:p-[44px] md:ps-[75px]`} src={urlFor(data.image).url()} alt="banner img" width={350} height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution_Banner