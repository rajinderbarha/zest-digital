import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'
import { AboutType } from '../../../../lib/interface';
import { urlFor } from '../../../../lib/sanity.client';

function About_team({ data }: { data: AboutType[] }) {

    return (
        <div className={`${classes.About_team} main_padding`}>
            <div className='main_container_x'>
                

                    {data?.map((aboutdata,index) => (
                        <div key={`${index}_About_team_1`} className=''>
                        <div className='About_team_box text-center grid sm:grid-cols-2 md:grid-cols-3 gap-20' key={`${aboutdata}_About_team`}>

                            {aboutdata.team.map((teamData,index) => (
                                <div key={`${index}_About_team_2`}>

                            <div className='About_img_box relative mx-auto md:mb-14 mb-8 max-w-[430px]'>
                                <div className={`${classes.Team_img_circle} absolute  bottom-0`}></div>
                                {/* <Image className={`${classes.Team_img_circle} absolute  bottom-0`} src={Team_img_circle} alt="" /> */}
                                <Image src={urlFor(teamData.image).url()} width={481} height={481} className={`${classes.Team_img} relative z-10 mx-auto `} alt="" />
                            </div>

                            <h3 className='text-25px md:text-35px font-semibold font-mono text-color-1' >{teamData.title}   </h3>
                            <p className='text-lg font-normal font-mono text-color-1'>{teamData.description}</p>
                                    </div>
                            ))}
                        </div>
                        </div>
                    ))}

                </div>
        
        </div>
    )
}

export default About_team