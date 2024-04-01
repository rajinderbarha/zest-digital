import React from 'react'
import Casestudyintro_Image from '../../../assets/images/Case_studies_circle.png'
import Image from 'next/image'
import classes from './CaseStudyIntro.module.css'

function Casestudyintro() {
    return (
        <>
            <div className={`${classes.Casestudyintro}`}>
                <div className='main_container'>
                    <div className="grid md:grid-cols-12 ">
                        <div className="md:col-span-8">
                            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5'>Supporting 350+ organisations over 10+ years, to achieve sustainable growth</h1>
                            <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 ">Schedule a call</button>
                        </div>
                        <div className="md:col-span-4 ">
                            <Image className='md:ms-auto mx-auto' src={Casestudyintro_Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Casestudyintro