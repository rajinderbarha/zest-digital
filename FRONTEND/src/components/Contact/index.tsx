import Image from 'next/image'
import React from 'react'
import facebook from '../../assets/images/Facebook_Zest_icon_black.png'
import instagram from '../../assets/images/Instagram_Zest_icon_black.png'
import linkedin from '../../assets/images/LinkedIn_Zest_icon_black.png'
import hand_wave_img from '../../assets/images/Hand_wave_icon.png'
import classes from './Contact.module.css'
import MapLocations from './MapLocations'
import { ContactType } from '../../../lib/interface'
import Link from 'next/link'
import { urlFor } from '../../../lib/sanity.client'

function Contact({ data }: { data:  ContactType }) {
        console.log(data)
    return (
        <>
            <div className="Contact xl:mt-[140px] lg:mt-[80px] md:mt-[70px] mt-[40px] main_padding">
                <div className="main_container ">
                    

                        <div className="grid lg:grid-cols-12 ">
                        <div className={`${classes.text_div} lg:col-span-5   relative h-max lg:me-10`}>
                            <div className=" max-w-[636px] ">
                                <h2 className="font-mono font-semibold md:text-35px sm:text-30px text-25px sm:pe-10">{data?.description}</h2>

                              
                                <div className="icons flex mt-[20px] md:mt-10 gap-[18px]">
                                {data?.social.map((socialmap,index)=>(

                                  <Link href={socialmap.socialLink} key={`${index}_socialmap`}>
                                  <Image src={urlFor(socialmap.socialImage).url()} height={45} width={45} alt="" className='md:max-w-full md:max-h-full max-w-[30px]'/>
                                  </Link>
                                   
                                ))}
                                </div>
                            </div>
                            <div className="sm:block hidden hand_img absolute right-0 md:-bottom-[60%] -bottom-[20%] md:max-w-max max-w-[150px]">
                                <Image src={urlFor(data?.image).url()} width={270} height={214} alt="" className='' />

                            </div>
                        </div>
                        <div className="lg:col-span-7 lg:mt-0 md:mt-[230px] mt-[100px]">
                            <div className="max-w-[956px] ms-auto bg-color-1 md:rounded-30px rounded-[20px] px-5 sm:px-10 ">
                                <form className="max-w-[670px] mx-auto sm:py-[88px] py-[50px] grid gap-5 sm:gap-9">

                                    <div className="enquiry">
                                        <label htmlFor="enquiry" className="text-color-9 text-base font-semibold font-mono w-full ">What is the nature of your enquiry?</label>
                                        <select id="enquiry" name="enquiry" className={`${classes.select_field}`} required>
                                            <option>Grow my business</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                    <div className={`${classes.names_div} flex justify-between`}>
                                        <div className="first_name flex flex-col w-full max-w-[300px]">
                                            <label htmlFor="fname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>First name*</label>
                                            <input type="text" name="fname" id="" className={`${classes.input_fields} `} placeholder='John' required />
                                        </div>
                                        <div className="last_name flex flex-col w-full max-w-[300px]">
                                            <label htmlFor="lname" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>Last name</label>
                                            <input type="text" name="lname" id="" className={`${classes.input_fields} `} placeholder='Doe' />
                                        </div>
                                    </div>
                                    <div className="email flex flex-col w-full ">
                                        <label htmlFor="email" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>E-mail*</label>
                                        <input type="email" name="email" id="" className={`${classes.input_fields} `} placeholder='johndoe@gmail.com' required />
                                    </div>
                                    <div className="message flex flex-col w-full ">
                                        <label htmlFor="message" className='text-color-9 text-base font-semibold font-mono mb-[11px]'>Message*</label>{/* <input type="" name="emmessageail" id="" className='border border-color-9 rounded-[10px] px-[25px] py-[14px] text-lg h-[50px]' placeholder='johndoe@gmail.com' required /> */}
                                        <textarea name="message" id="" cols={30} rows={10} className={`${classes.text_area_field} `} placeholder='Type your message here' required></textarea>
                                    </div>
                                    <div className="note sm:mt-[-26px] -mt-[6px]">
                                        <p className='text-color-9 text-md font-mono'>* required fields</p>
                                    </div>
                                    <input type="submit" value="Send" className='bg-white text-base font-mono text-color-1 hover:bg-color-1 hover:text-white  border border-white rounded-full md:px-[26px] md:py-[8px] px-[20px] py-[5px] mx-auto' />

                                </form>

                            </div>
                        </div>

                    </div>
                    <div className="mt-[200px] flex justify-between gap-3 flex-wrap xl:mb-[180px] lg:mb-[150px] md:mb-[50px] mb-[0px]">

                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                        <MapLocations />
                    </div>



                </div>
            </div>
        </>
    )
}

export default Contact