import React from 'react'
import objective_img from '../../../../assets/images/objective.png'
import classes from '../singlebox.module.css'
import Image from 'next/image'
function objective() {
    return (
        <>
            <div className={`${classes.objective} max-w-[1545px] mx-auto px-12`}>

                <div className={`grid md:grid-cols-2 items-center rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-compo gap-10`}>
                    <div className="col-span-1">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>Objectives</h2>
                        <div className="font-lato md:text-md  lg:text-lg mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>Hanson (UK) were looking for an SEO agency partner to increase their digital presence within the product specific area of concrete supply, with a view to improving awareness of two-specific streams of business. </p>
                            <p className='mt-1 md:mt-3 lg:mt-12'>This had to have a national presence but with a local focus, since customers would be looking for local suppliers to minimise distribution costs.</p>
                        </div>
                    </div>
                    <div className="col-span-1   ">
                        <Image src={objective_img} alt="" className="ms-auto " />
                    </div>

                 </div>
            </div>
        </>
    )
}

export default objective
