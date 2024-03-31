import React from 'react'
import Casestudyintro_Image from '../../../assets/images/Case_studies_circle.png'
import Image from 'next/image'
import classes from './resourcesbanner.module.css'

function Resourcesbanner() {
    return (
        <>
            <div className={`${classes.Resourcesbanner}`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-7">
                            {/* <h2 className='md:text-45px text-30px font-mono bg-color-7 w-max px-2' >Hanson (UK)</h2> */}
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>Optimise your growth campaigns with a selection of tools and resources</h1>
                            {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                        </div>
                        {/* <div className="md:col-span-6 ">
                            <Image className='md:ms-auto ' src={Casestudyintro_Image} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resourcesbanner