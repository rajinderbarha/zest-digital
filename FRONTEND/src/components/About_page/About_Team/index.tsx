import React from 'react'
import Image from 'next/image'
import classes from '../About_banner.module.css'
import users from '../Team_json/data.json';
import Team_img from '../../../assets/images/team-ollieh-transparent.png'
import Team_img_box from '../../../assets/images//circle bg.svg'
function About_team() {
    return (
        <div className={`${classes.About_team} `}>
            <div className='main_container_x'>
                <div className='grid md:grid-cols-3 gap-20'>

                    {users.users.map(user => (
                        <div className='About_team_box text-center' key={user.id}>
                            <div className='About_img_box relative md:mb-14 mb-8'>
                                <Image className={`${classes.Team_img_box} absolute  bottom-0`} src={Team_img_box} alt="" />
                                <Image src={Team_img} className={`${classes.Team_img} relative z-10 `} alt="" />
                            </div>

                            <h3 className='text-35px font-semibold font-mono ' >{user.name}  </h3>
                            <p className='text-lg font-normal font-mono'>{user.position}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default About_team