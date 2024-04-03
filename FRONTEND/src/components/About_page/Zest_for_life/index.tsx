import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'

import { AboutType } from '../../../../lib/interface'
import { urlFor } from '../../../../lib/sanity.client'

function Zest_for_life({ data }: { data: AboutType[] }) {
    
    return (
        <>
            <div className={`${classes.Zest_for_life}`}>
                <div className='main_container_x'>
                    {data?.map((item,index)=>(

                   <div key={`${item}_Zest_for_life`} >
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-9">
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5'>{item.lifeSection.title}</h1>
                            <p className='font-mono font-semibold md:text-35px text-25px'>{item.lifeSection.description}</p>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        <div className="md:col-span-3">
                            <Image className=' md:ms-auto mx-auto' src={urlFor(item.lifeSection.image).url()} width={197} height={198} alt="" />
                        </div>                    </div>


                           
                    <div className="grid md:grid-cols-3 gap-14 mt-16">
                        {item.card.map((cardItem,path)=>  { 
                            if (path == 0) {
                            return (
                            <div className='Zest_for_life_box text-center' key={`${path}__Zest_for_life_path_0`}>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>{cardItem.title}</h2>
                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>{cardItem.description}</p>
                        </div>
                        )}
                        else if (path == 1){
                            return(

                                <div className='Zest_for_life_box md:mt-20 text-center' key={`${path}__Zest_for_life_path_1`}>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>{cardItem.title}</h2>
                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>{cardItem.description}</p>
                        </div>
                                )
                        }
                        else {
                            return (

                                <div className='Zest_for_life_box text-center md:mt-40' key={`${path}__Zest_for_life_path`}>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>{cardItem.title}</h2>
                            <Image src={urlFor(cardItem.image).url()} width={440} height={440} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>{cardItem.description}</p>
                        </div>
                                )
                        }
                    }
                        )}
                        

                        {/* <div className='Zest_for_life_box md:mt-20 text-center'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Planet</h2>
                            <Image src={People} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Determined to leave our planet having given back more than we took.</p>
                        </div>

                        <div className='Zest_for_life_box text-center md:mt-40'>
                            <h2 className='font-mono font-semibold md:text-45px md:mb-20 mb-6 text-30px '>Philanthropy</h2>
                            <Image src={People} className='shadow-compo rounded-30px' alt="" />
                            <p className='text-base font-mono  font-normal md:mt-10 mt-4 md:px-8'>Proud to support causes that improve the lives of those less fortunate.</p>
                        </div> */}
                    </div>
                </div>

))}
</div>


            </div>
        </>
    )
}

export default Zest_for_life