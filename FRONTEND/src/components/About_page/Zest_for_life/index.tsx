import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'

import { AboutType } from '../../../../lib/interface'
import { urlFor } from '../../../../lib/sanity.client'

function Zest_for_life({ data }: { data: AboutType[] }) {

    return (
        <>
            <div className={`${classes.Zest_for_life}  main_padding xl:mt-[125px] lg:mt-[100px] md:mt-[80px] sm:mt-[50px] mt-[30px]`}>
                <div className="main_padding">
                    <div className='main_container_x '>
                        {data?.map((item, index) => (

                            <div key={`${item}_Zest_for_life`} >
                                <div className="grid grid-cols-12 ">
                                    <div className="col-span-9">
                                        <h1 className='font-mono  font-semibold xl:text-55px lg:text-[50px] md:text-40px sm:text-[30px]  text-[22px] xl:mb-[50px] lg:mb-[40px] md:mb-[30px] sm:mb-[10px] mb-[5px] text-color-1'>{item.lifeSection.title}</h1>
                                        <p className='max-w-[182px] font-mono md:max-w-[986px] font-semibold lg:text-35px md:text-30px sm:text-20px text-[14px] mb:mb-0 sm:mb-5 mb-[5px] text-color-1'>{item.lifeSection.description}</p>
                                        {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                                    </div>
                                    <div className="col-span-3  ">
                                        <Image className=' md:ms-auto mx-auto xl:max-w-full lg:max-w-[250px] md:max-w-[200px] sm:max-w-[150px] max-w-[100px]' src={urlFor(item.lifeSection.image).url()} width={300} height={300} alt="" />
                                    </div>                    </div>



                                <div className="grid md:grid-cols-3 gap-14 lg:mt-[90px] md:mt-[80px] sm:mt-[70px] mt-[50px]">
                                    {item.card.map((cardItem, path) => {
                                        if (path == 0) {
                                            return (
                                                <div className='Zest_for_life_box text-center md:max-w-fit max-w-[270px] mx-auto' key={`${path}__Zest_for_life_path_0 `}>
                                                    <h2 className='font-mono font-semibold xl:text-45px lg:text-40px md:text-35px text-[18px] sm:text-25px  xl:mb-[70px] lg:mb-[50px] md:mb-[30px] mb-6  text-color-1'>{cardItem.title}</h2>
                                                    <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-blue-right border border-black md:rounded-30px rounded-[20px] mx-auto ' alt="" />
                                                    <p className='text-base font-mono  font-normal lg:mt-8 md:mt-6 mt-4 md:px-8 max-w-[440px] mx-auto text-color-1'>{cardItem.description}</p>
                                                </div>
                                            )
                                        }
                                        else if (path == 1) {
                                            return (

                                                <div className='Zest_for_life_box md:mt-20  md:max-w-fit text-center  max-w-[270px] mx-auto' key={`${path}__Zest_for_life_path_1`}>
                                                    <h2 className='font-mono font-semibold xl:text-45px lg:text-40px md:text-35px  text-[18px] sm:text-25px xl:mb-[70px] lg:mb-[50px] md:mb-[30px] mb-6  text-color-1'>{cardItem.title}</h2>
                                                    <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-blue-right border border-black md:rounded-30px rounded-[20px] mx-auto' alt="" />
                                                    <p className='text-base font-mono  font-normal lg:mt-8 md:mt-6 mt-4 md:px-8 max-w-[440px] mx-auto text-color-1' >{cardItem.description}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (

                                                <div className='Zest_for_life_box  md:max-w-fit text-center md:mt-40  max-w-[270px] mx-auto' key={`${path}__Zest_for_life_path`}>
                                                    <h2 className='font-mono font-semibold xl:text-45px lg:text-40px md:text-35px  text-[18px] sm:text-25px xl:mb-[70px] lg:mb-[50px] md:mb-[30px] mb-6  text-color-1'>{cardItem.title}</h2>
                                                    <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-blue-right border border-black md:rounded-30px rounded-[20px] mx-auto' alt="" />
                                                    <p className='text-base font-mono  font-normal lg:mt-8 md:mt-6 mt-4 md:px-8 max-w-[440px] mx-auto text-color-1'>{cardItem.description}</p>
                                                </div>
                                            )
                                        }
                                    }
                                    )}


                                    {/* <div className='Zest_for_life_box md:mt-20 text-center'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Planet</h2>
                            <Image src={People} className='shadow-blue rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Determined to leave our planet having given back more than we took.</p>
                        </div>

                        <div className='Zest_for_life_box text-center md:mt-40'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Philanthropy</h2>
                            <Image src={People} className='shadow-blue rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Proud to support causes that improve the lives of those less fortunate.</p>
                        </div> */}
                                </div>
                            </div>

                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Zest_for_life