import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'
import { AboutType } from '../../../../lib/interface';
import { urlFor } from '../../../../lib/sanity.client';

function About_team({ data }: { data: AboutType[] }) {

    return (
        <div className={`${classes.About_team} `}>
            <div className='main_container_x'>
                

                    {data?.map((aboutdata,index) => (
                        <div key={`${index}_About_team_1`} className=''>
                        <div className='About_team_box text-center grid md:grid-cols-3 gap-20' key={`${aboutdata}_About_team`}>

                            {aboutdata.team.map((teamData,index) => (
                                <div key={`${index}_About_team_2`}>

                            <div className='About_img_box relative md:mb-14 mb-8'>
                                <div className={`${classes.Team_img_circle} absolute  bottom-0`}></div>
                                {/* <Image className={`${classes.Team_img_circle} absolute  bottom-0`} src={Team_img_circle} alt="" /> */}
                                <Image src={urlFor(teamData.image).url()} width={481} height={481} className={`${classes.Team_img} relative z-10 `} alt="" />
                            </div>

                            <h3 className='text-35px font-semibold font-mono ' >{teamData.title}   </h3>
                            <p className='text-lg font-normal font-mono'>{teamData.description}</p>
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